import { ErrorMessage } from "@/app/api/(dtos)/generic";
import supabase from "@/config/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const { data, error, status } = await supabase
      .from("wallet")
      .select("*")
      .eq("owner", id);

    if (error) {
      return NextResponse.json({ error }, { status });
    }
    return NextResponse.json({ data });
  } catch (err) {
    return NextResponse.json({ error: err, message: ErrorMessage });
  }
}
