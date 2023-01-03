import { useState, useEffect } from "react"
import "./MainStyle.css"
export default function Main(){


    const [name, setName] = useState("Jim");

    useEffect(()=> {
        alert("qkqh")
    }, [/*바뀌는 값 */]);

    return(
        <>
        <div className="container">
            <h1>useState</h1>
            <h1 id='name'>{ name }</h1>
            <button onClick={()=>{setName(name === "Jim" ? "Kevin" : "Jim")}}>Change State</button>
            <br></br>
            <h1>useEffect</h1>
        </div>
        </>
    )
}