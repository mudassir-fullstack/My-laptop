import LanguageModel from "@/models/Language";
import { NextResponse } from "next/server";



export const POST = async (req: Request) => {
  try {

    const data = await req.json();
    const { name, proficiency } = data;

    if (!name) {
      return NextResponse.json(
        { success: false, message: "Name and proficiency are required." },
        { status: 400 }
      );
    }

    // ✅ Check if language already exists
    const existing = await LanguageModel.findOne({ name, proficiency });

    if (existing) {
      return NextResponse.json(
        {
          success: false,
          message: `Language "${name}" with proficiency "${proficiency}" already exists.`,
        },
        { status: 409 } // 409 = Conflict
      );
    }

    // ✅ Create new language
    const language = await LanguageModel.create({ name, proficiency });

    return NextResponse.json(
      {
        success: true,
        message: "Language added successfully",
        data: language,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("❌ Error creating language:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error creating language",
        error: error.message,
      },
      { status: 500 }
    );
  }
};
export const GET = async () => {
  try {

    const languages = await LanguageModel.find();

    return NextResponse.json(
      { success: true, data: languages },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: "Error fetching languages",
        error: error.message,
      },
      { status: 500 }
    );
  }
};
