export const dynamic = "force-dynamic";

import { GET as getResume, POST as postResume } from "@/controllers/resumeController";
import { connectDB } from "@/lib/db";

// ✅ Professional + Vercel-safe pattern
export const GET = async (req: Request) => {
  await connectDB(); // ensure DB is connected before handling the GET
  return getResume();
};

export const POST = async (req: Request) => {
  await connectDB(); // ensure DB is connected before handling the POST
  return postResume(req);
};
