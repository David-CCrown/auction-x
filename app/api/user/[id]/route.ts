import supabase from "@/config/supabase";
import { NextRequest, NextResponse } from "next/server";
import { ErrorMessage } from "../../(dtos)/generic";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const { data, error, status } = await supabase
      .from("user")
      .select("*")
      .eq("id", id)
      .single();
    if (error) {
      return NextResponse.json({ error }, { status });
    }
    return NextResponse.json({ data });
  } catch (err) {
    return NextResponse.json({ error: err, message: ErrorMessage });
  }
}
