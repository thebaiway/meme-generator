import memesData from '../memesData.js'
import React, {useState} from 'react'

export default function Meme() {

    // const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg")

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
     }
    )

    const [allMemeImages, setAllMemeImages] = useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random () * memesArray.length)

        const url = memesArray[randomNumber].url
        
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
     
    }

    return (
        <div className = "meme">
            <div className = "meme--div">
                <input type = "text" placeholder = "Top Text" className = "meme--input"></input>
                <input type = "text" placeholder = "Bottom Text" className = "meme--input"></input>
            </div>
                <button onClick = {getMemeImage} className = "meme--button">Get a new meme image 🖼️</button>
                <div className = "meme--img_div">
                <img src = {meme.randomImage} alt = " " className = "meme--img"></img>
                </div>
        </div>
    )
}