import { NextResponse } from "next/server";

// const BASE_URL = "https://maps.googleapis.com/maps/api/place/textsearch/json?";
// const GOOGLE_PLACE_KEY = process.env.GOOGLE_PLACE_KEY;

// export async function GET() {
//   try {
//     // Construct the URL with query parameters
//     const query = "restaurants in Sydney";
//     const url = `${BASE_URL}query=${encodeURIComponent(
//       query
//     )}&key=${GOOGLE_PLACE_KEY}`;

//     // Fetch data from Google Places API
//     const res = await fetch(url, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     // Check if the response status is OK (200)
//     if (!res.ok) {
//       throw new Error(`Failed to fetch data from Google Places API: ${res.statusText}`);
//     }

//     const data = await res.json();

//     // Return the data as JSON response
//     return NextResponse.json({ data });
//   } catch (error) {
//     // Handle errors and return an error response if needed
//     return NextResponse.error(error.message, { status: 500 });
//   }
// }

const BASE_URL="https://maps.googleapis.com/maps/api/place/textsearch/json?"
const GOOGLE_PLACE_KEY=process.env.GOOGLE_PLACE_KEY;

export async function GET(resquest:any) {

    const res=await fetch(
        BASE_URL+"query=restaurants%20in%20Sydney"+
        "&key="+GOOGLE_PLACE_KEY,
        {
            headers:{
                "Content-Type":"application/json"
            },
        } 
    )

    const resp=await res.json();
    
    return NextResponse.json({resp});
    
}