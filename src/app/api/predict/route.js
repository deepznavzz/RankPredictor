import { NextResponse } from "next/server";
import { predictCollege } from "@/lib/vertex-ai";
import { normalizeRank } from "@/lib/normalization";

export async function POST(req) {
  try {
    const { examType, rank, district, category } = await req.json();
    
    // Normalize rank
    const normalizedRank = normalizeRank(rank, examType, 2024, category);
    
    // AI Prediction
    const results = await predictCollege(normalizedRank, district, examType);
    
    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json(
      { error: "Prediction failed: " + error.message },
      { status: 500 }
    );
  }
}
