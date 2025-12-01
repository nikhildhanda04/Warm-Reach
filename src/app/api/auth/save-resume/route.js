import connectDB from "../../../../lib/dbConnection";
import User from "../../../../lib/models/user";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function POST(req) {
  try {
    await connectDB();

    const session = await auth.api.getSession({
      headers: await headers()
    });

    if (!session) {
      return Response.json({ message: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { resume } = body;

    const userId = session.user.id;

    if (!resume) {
      return Response.json(
        { message: "Resume is required" },
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



