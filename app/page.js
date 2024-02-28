"use client"

import { useState } from "react"

export default function Home() {
	const [quotes, setQuotes] = useState([])
	const [text, setText] = useState("Hello")
	return (
    <div className="h-screen bg-cover bg-center bg-[url('/bgimage.jpg')]">
      <div className="mx-auto w-fit mt-80">
        <div className="relative flex items-stretch">
        <input
          className="text-2xl px-10 text-black mt-12 border-2 border-green-300 rounded-full bg-white hover:bg-sky-200"
          type="text"
          value={text}
          placeholder="Enter your text here"
          onChange={(event) => {
            setText(event.target.value)
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



