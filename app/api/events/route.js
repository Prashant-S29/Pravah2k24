import connectMongoDB from "../../../libs/mongodb"
import pravah24_DB from "../../../model/event"
import { NextResponse } from "next/server";

export async function GET() {
    await connectMongoDB();
    const pravahEventsList = await pravah24_DB.find();
    return NextResponse.json({ pravahEventsList })
}
