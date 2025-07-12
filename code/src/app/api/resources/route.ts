import { NextRequest } from "next/server";

// time to use github as a cms
export async function GET(request:NextRequest)
{
  console.log(request)
  return new Response();
}
