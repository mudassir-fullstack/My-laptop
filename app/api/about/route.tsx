import { GET as GET_ABOUT, POST as POST_ABOUT } from "@/controllers/aboutController";
import { connectDB } from "@/lib/db";

export const dynamic = "force-dynamic";

// ✅ Professional way — ensure DB connected before each call
export const GET = async (req: Request) => {
  await connectDB();
  return GET_ABOUT();
};

export const POST = async (req: Request) => {
  await connectDB();
  return POST_ABOUT(req);
};
