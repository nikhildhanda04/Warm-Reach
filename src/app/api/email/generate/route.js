import axios from "axios";
import connectDB from "../../../../lib/dbConnection";
import Email from "../../../../lib/models/email";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { context } = body;

    if (!context) {
      return new Response(
        JSON.stringify({ message: "Context is required" }),
        { status: 400 }
      );
    }

    const prompt = `You are the best, most professional, and hireable cold email generator. Based on the following context, create a JSON object with keys: "subject" (short, attention-grabbing subject line), "body" (well-structured professional cold email body), and "ideas" (optional additional ideas or follow-ups).\n\nContext: ${context}`;

    const geminiRes = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" +
        process.env.GEMINI_API_KEY,
      {
        contents: [{ parts: [{ text: prompt }] }],
      }
    );

    let geminiText = geminiRes.data.candidates[0].content.parts[0].text;
    geminiText = geminiText.replace(/```json|```/g, "").trim();

    let emailData;
    try {
      emailData = JSON.parse(geminiText);
    } catch {
      return new Response(
        JSON.stringify({
          message: "Failed to parse Gemini API response: " + geminiText,
        }),
        { status: 500 }
      );
    }

    const newEmail = await Email.create({
      context,
      subject: emailData.subject,
      body: emailData.body,
      ideas: emailData.ideas || "",
    });

    return new Response(JSON.stringify(newEmail), { status: 201 });
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Gemini API error: " + error.message,
      }),
      { status: 500 }
    );
  }
}
