import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";

export async function GET() {
  try {
    const pool = await connectDB();

    const result = await pool.request().query("SELECT GETDATE() AS currentDate");

    return NextResponse.json({
      success: true,
      message: "Database connected successfully",
      data: result.recordset,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Database connection failed",
      },
      { status: 500 }
    );
  }
}