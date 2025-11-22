import mongoose from "mongoose";

const emailSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false, // Allow null for guest users
    },
    targetContext: {
      type: String,
      required: true,
    },
    senderResume: {
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
    tone: {
      type: String,
      enum: ['Formal', 'Enthusiastic', 'Direct', 'Friendly', 'Professional'],
      default: 'Professional',
    },
  },
  {
    timestamps: true,
  }
);

// Prevents model overwrite issues in Next.js hot reload
export default mongoose.models.Email || mongoose.model("Email", emailSchema);
