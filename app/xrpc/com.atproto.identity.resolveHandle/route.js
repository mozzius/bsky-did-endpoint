import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json({
    did: "did:plc:p2cp5gopk7mgjegy6wadk3ep",
  });
};
