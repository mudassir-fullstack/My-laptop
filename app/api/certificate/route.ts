export const dynamic = "force-dynamic";

import { GET as GET_CERTIFICATE, POST as POST_CERTIFICATE } from "@/controllers/certificateController";
import { connectDB } from "@/lib/db";

// ✅ Professional, Vercel-safe setup
export const GET = async (req: Request) => {
  await connectDB(); // ensure DB connection
  return GET_CERTIFICATE();
};

export const POST = async (req: Request) => {
  await connectDB(); // ensure DB connection
  return POST_CERTIFICATE(req);
};
