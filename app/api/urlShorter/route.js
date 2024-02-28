const API_KEY = process.env.API_KEY
const BASE_URL = "https://shrtlnk.dev/api/v2/link"

export async function getData() {
	const res = await fetch(BASE_URL, {
        mothod:"POST",
		headers: {
		    "api-key": API_KEY,
            Accept: "application/json",
            "Content-Type": "application/json",
		},
        body: JSON.stringify(urlToShorten)

	})
	const shrtUrl = await res.json()
	console.log(shrtUrl)
	return  shrtUrl//Response.json({ data: crypto?.data?.coins[0] })
}
//
//
//

// const { API_KEY } = process.env
// const BASE_URL = "https://api.coinranking.com/v2"

export async function GET(request) {
	const { searchParams } = new URL(request.url)
	const search = searchParams.get('search')
	const res = await fetch(`${BASE_URL}/coins?search=${search}`, {
		headers: {
			'Content-Type': 'application/json',
			'x-access-token': API_KEY
		}
	})
	const crypto = await res.json()
	console.log(crypto)
	return Response.json({ data: crypto?.data?.coins[0] })
}