import supabase from "@/config/supabase";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { ErrorMessage } from "../../(dtos)/generic";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const auctionId = params.id;
    const { data, error, status } = await supabase
      .from("auction")
      .select("*")
      .eq("id", auctionId)
      .single();
    if (error) {
      return NextResponse.json({ error }, { status });
    }
    return NextResponse.json({ data });
  } catch (err) {
    return NextResponse.json({ error: err, message: ErrorMessage });
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const auctionId = params.id;
  const updateBody = await req.json();

  try {
    const { data, error, status } = await supabase
      .from("auction")
      .update({ ...updateBody })
      .eq("id", auctionId)
      .select("*");

    if (error) {
      return NextResponse.json({ error }, { status });
    }
    return NextResponse.json({ data });
  } catch (err) {
    return NextResponse.json(
      { error: err, message: ErrorMessage },
      { status: 500 }
    );
  }
}
