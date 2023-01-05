import { useState } from "react";
import Main from "./page/Main.js";
import DummyList from "./components/DummyList.js";
import "./App.css"
function App() {
  const [randnum,setRand] = useState(0);
  
  function randomNumberInRange(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min;}
  
  const randbtn = () => {
    setRand(randomNumberInRange (1,100));
    // console.log(randnum);
  }

  return (
    <>
    <button onClick={randbtn}>get random number</button>
    <Main random = {randnum} />
    <DummyList/>
    </>
  );
}

export default App;
