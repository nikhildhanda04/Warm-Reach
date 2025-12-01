import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,

    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    savedResume: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
    _id: true, // Ensure _id is handled (Mongoose does this by default)
  }
);

// Prevents model overwrite issues in Next.js hot reload
// Explicitly use 'user' collection to match better-auth default
export default mongoose.models.User || mongoose.model("User", userSchema, "user");




