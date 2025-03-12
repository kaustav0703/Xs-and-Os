import { useEffect, useRef, useState } from "react"
import "./Player.css";

export default function Player({ name, chosen, activePlayer, userName, setUserName }) {

    const [isEdit, setEdit] = useState(false);
    const ref = useRef();
    function handleOnClick(type) {
        if (type == "submit") {
            setUserName(ref.current.value);
        }
        setEdit(!isEdit)
    }

    return (
        <div className={`player ${chosen == activePlayer ? 'active' : ''}`} >
            {isEdit ? <input ref={ref} className="player-name" type="text" name="name" id="name" placeholder={name} /> : <p className="player-name">{userName}</p>}
            < p className="chosen" >{chosen}</p >
            {isEdit ? <button onClick={() => { handleOnClick("submit") }}>Done</button> : <button onClick={(edit) => { handleOnClick("edit") }}>Edit</button>
            }
        </div >
    )
}