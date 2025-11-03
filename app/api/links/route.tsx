export const dynamic = "force-dynamic";

import { GET as GET_LINKS, POST as POST_LINKS } from "@/controllers/linksController";
import { connectDB } from "@/lib/db";

// ✅ Professional + Vercel-safe setup
export const GET = async (req: Request) => {
  await connectDB(); // ensures MongoDB connection (important in serverless)
  return GET_LINKS();
};

export const POST = async (req: Request) => {
  await connectDB();
  return POST_LINKS(req);
};
