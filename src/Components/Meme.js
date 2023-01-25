import memesData from '../memesData.js'

export default function Meme() {

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random () * memesArray.length)

       const url = memesArray[randomNumber].url
       console.log(url)
    }

    return (
        <div className = "meme">
            <div className = "meme--div">
                <input type = "text" placeholder = "Top Text" className = "meme--input"></input>
                <input type = "text" placeholder = "Bottom Text" className = "meme--input"></input>
            </div>
                <button onClick = {getMemeImage} className = "meme--button">Get a new meme image 🖼️</button>
        </div>
    )
}