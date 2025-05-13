import { ErrorMessage } from "@/app/api/(dtos)/generic";
import supabase from "@/config/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const userId = params?.id;

  try {
    const { data, error } = await supabase
      .from("auction")
      .select("*")
      .eq("created_by", userId);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error, message: ErrorMessage }, { status: 500 });
  }
}
