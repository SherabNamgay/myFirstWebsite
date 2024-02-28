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






export default async function Home() {
	const data = await getData()
	console.log(data)
	return (
    <div className="h-screen bg-cover bg-center bg-[url('/bgimage.jpg')]">
      <div className="mx-auto w-fit mt-80">
        <div className="relative flex items-stretch">
        <input
          className="text-2xl px-10 text-black mt-12 border-2 border-green-300 rounded-full bg-white hover:bg-sky-200"
          type="text"
          placeholder="Enter url text here"
          onChange={(event) => {
            setUserInput(event.target.value)
          }
        }
      />
      <button
        className="h-fit w-fit text-sky-300 text-xl py-2 px-4 rounded-full absolute right-0 top-11 bottom-0"
        onClick={()=>{
          setText("")
          }
        }
      >X</button>
        </div>
        
      
        <button
          className="m-2 ml-5 w-40 text-2xl font-bold border-4 px-2 border-white rounded-full bg-sky-500 hover:bg-sky-700 "
          onClick={() => {
            var newQuotes = quotes.concat([text])
            setQuotes(newQuotes)
            setText("")
          }}
        >
          Save Text
        </button>
        <button
          className="text-2xl w-40 ml-2 font-bold border-4 px-2 border-white rounded-full bg-sky-500 hover:bg-sky-700 "
          onClick={() => {
            var newQuotes = []
            setQuotes(newQuotes)
            setText("")
          }}
        >
          Delete Text
        </button>
        </div>
        <div className="text-8xl text-green-500 text-center mt-12">
          {text}
      </div>
      <div className="text-4xl text-blue-500 text-center">
          {quotes.map((quote) => {
            return (
              <p class>
                {quote}
              </p>
            )
          })}
        </div>
    </div>
	)
}




