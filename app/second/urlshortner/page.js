"use client"
import { useEffect, useState } from "react"


export default function Home() {
  const [urlInput, setUrlInput] =useState('')
  const [shortenUrl, setShortenURL] =useState('')

  const ShrtLnk= async()=>{
    try{
      const res=await fetch("/api/url-shortner", {
        method: "POST",
        body: JSON.stringify({data:urlInput})
      })
      if(res.ok){
        const{data}= await res.json()
        setShortenURL(data.shrtlnk)
      }else{
        console.error("HTTP error:", res.status);
              setShortenURL("URL not working")
      }
    }catch(error) {
      console.error("error fetching data:", error);
          setShortenURL("An error occurred")
      }
    }

  // useEffect(()=>{
  //   // const ShrtLnk= async()=>{
  //   //   try{
  //   //     const res=await fetch("/api/url-shortner", {
  //   //       method: "POST",
  //   //       body: JSON.stringify({data:urlInput})
  //   //     })
  //   //     if(res.ok){
  //   //       const{shortenUrl}= await res.json()
  //   //       setShortenURL(shortenUrl)
  //   //     }else{
  //   //       console.error("HTTP error:", res.status);
  //   //             setShortenURL("URL not working")
  //   //     }
  //   //   }catch(error) {
  //   //     console.error("error fetching data:", error);
  //   //         setShortenURL("An error occurred")
  //   //     }
  //   //   }
  //   ShrtLnk()
  // },[])

  return(
    <div className="text-center">
      <h1 className="text-3xl my-5">URL shortener</h1>
      <input
        className="text-black mx-4 border-4 rounded-full px-4 w-19"
        placeholder="Input URL to shorten"
        value={urlInput}
        onChange={(event) => setUrlInput(event.target.value)}
      />
      <button
        className="border-2 px-3 rounded-full bg-sky-400"
        onClick={ShrtLnk}
      >Generate</button>
      <div className="text-center border-2 w-fit my-4 h-8 "  > <a target="blank" href={shortenUrl}>{shortenUrl}</a></div>
    </div>
  )

}

