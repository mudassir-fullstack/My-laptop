export const dynamic = "force-dynamic";

import { GET as GET_SKILLS, POST as POST_SKILLS } from "@/controllers/skillsController";
import { connectDB } from "@/lib/db";

// ✅ Production-ready + Vercel-safe setup
export const GET = async (req: Request) => {
  await connectDB(); // ensure MongoDB is connected before GET
  return GET_SKILLS(req);
};

export const POST = async (req: Request) => {
  await connectDB(); // ensure connection before POST
  return POST_SKILLS(req);
};
