import connectDB from "../../../../lib/dbConnection";
import User from "../../../../lib/models/user";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { email, password, name } = body;

    if (!email || !password || !name) {
      return Response.json(
        { message: "Email, password, and name are required" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return Response.json(
        { message: "User with this email already exists" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      email,
      password: hashedPassword,
      name,
    });

    // Return user without password
    const userResponse = {
      _id: user._id,
      email: user.email,
      name: user.name,
      savedResume: user.savedResume,
    };

    return Response.json(
      { message: "User created successfully", user: userResponse },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return Response.json(
      { message: "Error creating user: " + error.message },
      { status: 500 }
    );
  }
}



