import { NextResponse } from "next/server";

export default function middleware() {
  return NextResponse.rewrite("/not-a:param");
}
