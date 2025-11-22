import connectDB from "../../../../lib/dbConnection";
import User from "../../../../lib/models/user";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { userId, resume } = body;

    if (!userId || !resume) {
      return Response.json(
        { message: "User ID and resume are required" },
        { status: 400 }
      );
    }

    const user = await User.findByIdAndUpdate(
      userId,
      { savedResume: resume },
      { new: true }
    );

    if (!user) {
      return Response.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    return Response.json(
      { message: "Resume saved successfully", savedResume: user.savedResume },
      { status: 200 }
    );
  } catch (error) {
    console.error("Save resume error:", error);
    return Response.json(
      { message: "Error saving resume: " + error.message },
      { status: 500 }
    );
  }
}

