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
        <div>
            <div>
                <h1>Generate lyrics</h1>
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
                    onClick={getData}>Search</button>
                <div>
                    <h2>lyrics:</h2>
                    <pre>{lyrics}</pre>
                </div>
            </div>
        </div>
    
    )
}

