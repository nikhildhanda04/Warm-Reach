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
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    savedResume: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

// Prevents model overwrite issues in Next.js hot reload
export default mongoose.models.User || mongoose.model("User", userSchema);

