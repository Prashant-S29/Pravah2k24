import connectMongoDB from "../../../libs/mongodb"
import pravah2024_events from "../../../model/event"
import { NextResponse } from "next/server";

export async function GET() {
    await connectMongoDB();
    const pravahEventsList = await pravah2024_events.find();
    return NextResponse.json({ pravahEventsList })
}
