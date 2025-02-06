import ShipEngine from "shipengine";
export const shipEngine = new ShipEngine({
	apiKey: process.env.SHIPENGINE_API_KEY as string
});

apiKey: process.env.SHIPENGINE_API_KEY as string
//import { NextRequest } from "next/server";
//	export async function GET(request: NextRequest) {
//	return new Response(JSON.stringify({message:"Shipengine Testing"}))
//	}