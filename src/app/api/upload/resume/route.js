export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req) {
  try {

    if (!req) {
      return Response.json(
        { message: "Invalid request" },
        { status: 400 }
      );
    }

    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return Response.json(
        { message: "No file uploaded" },
        { status: 400 }
      );
    }

    const fileType = file.type;
    const fileName = file.name.toLowerCase();
    let extractedText = "";


    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);


    if (fileType === "application/pdf" || fileName.endsWith(".pdf")) {
      try {
        // Try using pdf-parse with proper module resolution
        let pdfParse;
        try {
          const pdfParseModule = await import("pdf-parse");
          pdfParse = pdfParseModule.default || pdfParseModule;
        } catch {
          // If default import fails, try named import
          const pdfParseModule = await import("pdf-parse");
          pdfParse = pdfParseModule;
        }

        // Ensure pdfParse is a function
        if (typeof pdfParse !== 'function') {
          throw new Error("pdf-parse module is not a function");
        }

        const pdfData = await pdfParse(buffer);
        extractedText = pdfData.text || pdfData;
      } catch (error) {
        console.error("PDF parsing error:", error);
        // Provide helpful error message
        return Response.json(
          {
            message: "Error parsing PDF file. This might be due to file format issues. Please try: 1) Converting the PDF to DOCX format, 2) Copying and pasting the text directly, or 3) Using a different PDF file. Error details: " + (error.message || String(error))
          },
          { status: 500 }
        );
      }
    }

    else if (
      fileType ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
      fileName.endsWith(".docx")
    ) {
      try {
        // Dynamic import for mammoth to avoid issues with Next.js
        const mammoth = await import("mammoth");
        const result = await mammoth.extractRawText({ buffer });
        extractedText = result.value;
      } catch (error) {
        console.error("DOCX parsing error:", error);
        return Response.json(
          { message: "Error parsing DOCX: " + (error.message || String(error)) },
          { status: 500 }
        );
      }
    }

    else if (fileType === "text/plain" || fileName.endsWith(".txt")) {
      extractedText = buffer.toString("utf-8");
    }

    else if (
      fileType === "application/msword" ||
      fileName.endsWith(".doc")
    ) {
      try {
        const mammoth = await import("mammoth");
        const result = await mammoth.extractRawText({ buffer });
        extractedText = result.value;
      } catch (error) {
        console.error("DOC parsing error:", error);
        return Response.json(
          {
            message:
              "DOC files are not fully supported. Please convert to PDF or DOCX, or paste the text directly.",
          },
          { status: 400 }
        );
      }
    } else {
      return Response.json(
        {
          message:
            "Unsupported file type. Please upload PDF, DOCX, DOC, or TXT files.",
        },
        { status: 400 }
      );
    }

    if (!extractedText || extractedText.trim().length === 0) {
      return Response.json(
        {
          message: "Could not extract text from the file. Please try pasting the content directly.",
        },
        { status: 400 }
      );
    }

    return Response.json(
      {
        text: extractedText,
        fileName: file.name,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Upload error:", error);
    return Response.json(
      {
        message: "Error processing file: " + (error.message || String(error)),
      },
      { status: 500 }
    );
  }
}

