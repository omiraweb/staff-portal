import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const supabase = await createClient();

  const { data } = await supabase.auth.getClaims();

  if (!data?.claims) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  switch (data.claims.user_role) {
    case "admin":
      return NextResponse.redirect(new URL("/admin", request.url));
    case "hr":
      return NextResponse.redirect(new URL("/hr", request.url));
    case "employee":
      return NextResponse.redirect(new URL("/employee", request.url));
    default:
      return NextResponse.redirect(new URL("/auth/login", request.url));
  }
}
