"use client"
import {useState } from "react"

const BASE_URL="https://api.lyrics.ovh/v1"

export default function home(){
    const [artist, setArtist] =useState('')
    const [songName, setSongName] =useState('')
    const [lyrics, setLyrics] =useState('')

    const getData = async() =>{
        try{
            const res= await fetch(`${BASE_URL}/${artist}/${songName}`);
            if (res.ok) {
                const { lyrics} = await res.json();
                setLyrics(lyrics)
            } else {
                console.error("HTTP error:", res.status);
                setLyrics("lyrics not found")
            } 
        }catch(error){
            console.error("error fetching data:", error);
            setLyrics("An error occurred")
        }
    } 
    return (
        <div className="text-center">
            <div className="text-3xl m-4">
                <h1>Generate lyrics</h1>
            </div>
            <div className="text-black grid-cols-3">
                <input
                    className="m-2 border-2 px-3 rounded-full"
                    type="text"
                    value={artist}
                    placeholder="Artist Name"
                    onChange={(event) => setArtist(event.target.value)}
                />
                <input
                    className="m-2 border-2 px-3 rounded-full"
                    type="text"
                    value={songName}
                    placeholder="Song Name"
                    onChange={(event) => setSongName(event.target.value)}
                />
                <button
                    className="m-2 border-2 px-3 rounded-full bg-sky-300"
                    onClick={getData}>Search</button>
                <div className="text-white text-lg" >
                    <h2>lyrics:</h2>
                    <pre>{lyrics}</pre>
                </div>
            </div>
        </div>
    
    )
}

