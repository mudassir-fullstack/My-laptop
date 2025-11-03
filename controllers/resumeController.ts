import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";
import resumeModel from "@/models/Resume";

// ✅ GET Resume — show only latest uploaded one
export const GET = async () => {
  try {
    const latestResume = await resumeModel.findOne().sort({ createdAt: -1 });

    if (!latestResume) {
      return NextResponse.json(
        { success: false, message: "No resume found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Latest resume fetched successfully",
        data: latestResume,
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("❌ Error fetching resume:", err);
    return NextResponse.json(
      { success: false, message: "Server error while fetching resume" },
      { status: 500 }
    );
  }
};

// ✅ POST Resume — upload new and keep history
export const POST = async (req: Request) => {
  try {
    const formData = await req.formData();
    const file = formData.get("resume") as File | null;

    if (!file) {
      return NextResponse.json(
        { success: false, message: "No resume file provided" },
        { status: 400 }
      );
    }

    // ✅ Allowed file types
    const allowedTypes = [
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "image/jpeg",
      "image/png",
    ];

    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Invalid file type. Only PDF, DOC, DOCX, JPG, and PNG files are allowed.",
        },
        { status: 400 }
      );
    }

    // ✅ Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // ✅ Upload new resume to Cloudinary
    const uploaded: any = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: "portfolio/resume",
          resource_type: "auto",
        },
        (err, result) => {
          if (err) reject(err);
          else resolve(result);
        }
      );
      stream.end(buffer);
    });

    // ✅ Save resume record in MongoDB (keep all)
    const newResume = await resumeModel.create({
      resume: uploaded.secure_url,
      public_id: uploaded.public_id,
      uploadedAt: new Date(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Resume uploaded successfully!",
        data: newResume,
      },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("❌ Resume upload failed:", err);
    return NextResponse.json(
      {
        success: false,
        message: "Server error while uploading resume",
        error: err.message,
      },
      { status: 500 }
    );
  }
};
