import logo from '../Images/troll-face.png'

export default function Header () {
    return (
        <div className = "header">
            <img className = "logo" src = {logo} alt = ""></img>
            <h1>Meme Generator</h1>
        </div>
    )
}