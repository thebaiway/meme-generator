
export default function Meme() {
    return (
        <div className = "meme">
            <div className = "meme--div">
                <input type = "text" placeholder = "Top Text" className = "meme--input"></input>
                <input type = "text" placeholder = "Bottom Text" className = "meme--input"></input>
            </div>
                <button className = "meme--button">Get a new meme image 🖼️</button>
        </div>
    )
}