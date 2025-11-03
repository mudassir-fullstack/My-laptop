import mongoose, { Schema, model } from "mongoose";

const ResumeSchema = new Schema(
  {
    resume: { type: String, required: true },
    public_id: { type: String, required: true },
    uploadedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.models.Resume || model("Resume", ResumeSchema);
