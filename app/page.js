import UrlShortner from "./components/urlshortner"

const URL_LINK="https://shrtlnk.dev/api/v2/link"
const API_KEY= process.env.API_KEY
// var inputElement=document.getElementById("userInput")
// var inputValue =inputElement.value
var urlToShorten={
  url:"https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/solutions/javascript?filter=me&sort=best_practice&invalids=false"
}
async function getData() {
	const res = await fetch(URL_LINK,{
    method:"POST",
    headers:{
      "api-key": API_KEY,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(urlToShorten),
  })
  if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}


export default async function Home() {
	const data = await getData()
	console.log(data)
	return (
		<>
      <UrlShortner
     
      />

		</>
	)
}



