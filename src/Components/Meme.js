import memesData from '../memesData.js'
import React, {useState} from 'react'

export default function Meme() {

    const [memeImage, setMemeImage] = useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random () * memesArray.length)
        const src = setMemeImage(prevMemeImage => prevMemeImage = memesArray[randomNumber].url)
        src()
    }

    return (
        <div className = "meme">
            <div className = "meme--div">
                <input type = "text" placeholder = "Top Text" className = "meme--input"></input>
                <input type = "text" placeholder = "Bottom Text" className = "meme--input"></input>
            </div>
                <button onClick = {getMemeImage} className = "meme--button">Get a new meme image 🖼️</button>
                <div className = "meme--img_div">
                <img src = {memeImage} alt = "" className = "meme--img"></img>
                </div>
        </div>
    )
}