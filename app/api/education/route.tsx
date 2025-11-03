export const dynamic = "force-dynamic";

import { GET as GET_EDUCATION, POST as POST_EDUCATION } from "@/controllers/educationController";
import { connectDB } from "@/lib/db";

// ✅ Professional + Vercel-safe setup
export const GET = async (req: Request) => {
  await connectDB(); // ensure DB is connected before fetching data
  return GET_EDUCATION();
};

export const POST = async (req: Request) => {
  await connectDB(); // ensure DB connection before writing data
  return POST_EDUCATION(req);
};
