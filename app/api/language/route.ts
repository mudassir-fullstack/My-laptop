export const dynamic = "force-dynamic";

import { GET as GET_LANGUAGE, POST as POST_LANGUAGE } from "@/controllers/languageController";
import { connectDB } from "@/lib/db";

// ✅ Clean + Vercel-safe setup
export const GET = async (req: Request) => {
  await connectDB(); // ensure MongoDB is connected before handling request
  return GET_LANGUAGE();
};

export const POST = async (req: Request) => {
  await connectDB(); // make sure DB is ready before saving data
  return POST_LANGUAGE(req);
};
