export const dynamic = "force-dynamic";

import { GET as GET_EXPERIENCE, POST as POST_EXPERIENCE } from "@/controllers/experienceController";
import { connectDB } from "@/lib/db";

// ✅ Professional, Vercel-safe setup
export const GET = async (req: Request) => {
  await connectDB(); // Ensure MongoDB is connected before using the controller
  return GET_EXPERIENCE();
};

export const POST = async (req: Request) => {
  await connectDB(); // Reconnect safely for each serverless call
  return POST_EXPERIENCE(req);
};
