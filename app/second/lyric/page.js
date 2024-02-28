"use client"
import {useEffect, useState } from "react"

const BASE_URL="https://api.lyrics.ovh/v1"
export default function home(){
    const [artist,setArtist] =useState('')
    const [songName,setSongName] =useState('')
    const [lyrics,setLyrics] =useState('')

    // useEffect(() => {
        const getData= async () => {
            const res= await fetch(BASE_URL+"/" +artist+ "/" +songName)
            const {data} =await res()
            if (data){
                setLyrics(data)
            }
        }
        getData()
    // },[])
    return (
        <div>
            <div>
                Generate lyrics
            </div>
            <div>
                <input
                className="text-black"
                type="text"
                value={artist}
                placeholder="Artist Name"
                onChange={(event) => setArtist(event.target.value)}
                />
                <input
                className="text-black"
                type="text"
                value={songName}
                placeholder="Song Name"
                onChange={(event) => setSongName(event.target.value)}
                />
                <button
                onClick={()=> getData()}
                >Search</button>

                <div>{lyrics}</div>
            </div>
        </div>
    
    )
}

