import connectDB from "../../../../lib/dbConnection";
import User from "../../../../lib/models/user";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return Response.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return Response.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return Response.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Return user without password
    const userResponse = {
      _id: user._id,
      email: user.email,
      name: user.name,
      savedResume: user.savedResume,
    };

    return Response.json(
      { message: "Login successful", user: userResponse },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return Response.json(
      { message: "Error logging in: " + error.message },
      { status: 500 }
    );
  }
}



