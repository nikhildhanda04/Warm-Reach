import connectDB from "../../../../lib/dbConnection";
import Email from "../../../../lib/models/email";

export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return Response.json(
        { message: "User ID is required" },
        { status: 400 }
      );
    }

    const emails = await Email.find({ userId })
      .sort({ createdAt: -1 })
      .limit(50)
      .select("_id targetContext subject body ideas tone createdAt");

    return Response.json(emails, { status: 200 });
  } catch (error) {
    return Response.json(
      {
        message: "Error fetching emails: " + error.message,
      },
      { status: 500 }
    );
  }
}

