import axios from "axios";
import connectDB from "../../../../lib/dbConnection";
import Email from "../../../../lib/models/email";

export async function POST(req) {
  try {
    
    try {
      await connectDB();
    } catch (dbError) {
      return new Response(
        JSON.stringify({ 
          message: "Database connection error: " + dbError.message + ". Please check your MongoDB connection string and ensure your IP is whitelisted in MongoDB Atlas."
        }),
        { status: 500 }
      );
    }

    const body = await req.json();
    const { targetContext, senderResume, tone = "Professional", userId } = body;

    if (!targetContext || !senderResume) {
      return new Response(
        JSON.stringify({ message: "Both target context and sender resume are required" }),
        { status: 400 }
      );
    }

    const prompt = `You are the best, most professional, and hireable cold email generator. Your task is to create a highly personalized email by cross-referencing the target context with the sender's resume/profile.

TARGET CONTEXT (What the email is about - Job Description, client brief, or company profile):
${targetContext}

SENDER PROFILE (Resume/CV - Background, skills, and accomplishments):
${senderResume}

TONE: ${tone}

Instructions:
1. Analyze the target context to understand what is needed (skills, experience, qualifications)
2. Cross-reference with the sender's resume to find matching skills, experiences, and accomplishments
3. Create a personalized email that highlights specific connections between the sender's background and the target requirements
4. Make it sound human and personalized - not like a generic template
5. The email should feel like a "cold email" that doesn't feel cold

Create a JSON object with these keys:
- "subject": A short, attention-grabbing subject line (max 60 characters)
- "body": A well-structured professional email body (3-5 paragraphs, personalized and relevant)
- "ideas": An array of 2-3 optional follow-up ideas or additional talking points

The email should be highly relevant, highlight specific matching skills and experiences, and sound human and personalized.`;

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
      userId: userId || null,
      targetContext,
      senderResume,
      subject: emailData.subject,
      body: emailData.body,
      ideas: emailData.ideas || [],
      tone,
    });

    return new Response(JSON.stringify(newEmail), { status: 201 });
  } catch (error) {
    // Check if it's a MongoDB error
    if (error.message && (error.message.includes('ECONNREFUSED') || error.message.includes('mongodb') || error.message.includes('querySrv'))) {
      return new Response(
        JSON.stringify({
          message: "Database connection error: " + error.message + ". Please check your MongoDB connection string in .env.local and ensure your IP is whitelisted in MongoDB Atlas.",
        }),
        { status: 500 }
      );
    }
    
    // Check if it's a Gemini API error
    if (error.message && (error.message.includes('Gemini') || error.message.includes('API') || error.response)) {
      return new Response(
        JSON.stringify({
          message: "Gemini API error: " + error.message,
        }),
        { status: 500 }
      );
    }
    
    // Generic error
    return new Response(
      JSON.stringify({
        message: "Error: " + error.message,
      }),
      { status: 500 }
    );
  }
}
