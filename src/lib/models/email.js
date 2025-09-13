import mongoose from "mongoose";

const emailSchema = new mongoose.Schema(
  {
    context: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    ideas: {
      type: [String],
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// Prevents model overwrite issues in Next.js hot reload
export default mongoose.models.Email || mongoose.model("Email", emailSchema);
