import "./Header.css";
import logo from "/assets/game-logo.png";


export default function Header() {
    return (
        <div className="header">
            <img src={logo} alt="Image Not Found" />
            <p className="title">Tic-Tac-Toe</p>
        </div>
    )
}