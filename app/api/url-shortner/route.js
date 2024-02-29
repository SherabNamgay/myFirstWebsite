const API_KEY = process.env.API_KEY
const BASE_URL = "https://shrtlnk.dev/api/v2/link"

export async function POST(request) {
	const req= await request.json()
	console.log(req)

	const res = await fetch(BASE_URL, {
        method:"POST",
		headers: {
		    "api-key": API_KEY,
            Accept: "application/json",
            "Content-Type": "application/json",
		},
        body: JSON.stringify({url:req.data})

	})
	const shrtUrl = await res.json()
	console.log(shrtUrl)
	return Response.json({ data: shrtUrl})
}
