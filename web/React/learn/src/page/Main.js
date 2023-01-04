import { useState, useEffect, useReducer } from "react";
import "./MainStyle.css";

export default function Main(props) {
  const [name, setName] = useState("Jim");
  const [propsValue, setProps] = useState(props.random); // props 로 받아온 값 바꾸려면 state 하나 만들어야함.
  
  useEffect(() => {
    console.log(name);
  }, [name]);

  console.log(props);

  return (
    <>
      <div className="container">
        <div id="box">
          <h1>useState</h1>
          <h1 id="name">{name} ({propsValue})</h1>
          <button id="btn" onClick={() => {
            setName(name === "Jim" ? "Tom" : "Jim");
            setProps(propsValue + 1);
            }}>Change State</button>
        </div>

        <div id="box">
            <h1>useEffect</h1>
            <h2>refer console</h2>
        </div>

        <div id="box">
            <h1>props</h1>
            <h2>Value : {props.random}</h2>
        </div>
      </div>
    </>
  );
}
