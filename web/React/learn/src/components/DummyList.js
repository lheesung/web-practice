import dummy from "../database/dummy.json"
import "./DummyListStyle.css"
export default function DummyList(){
    console.log(dummy.nameValue);
    return(
        <>
            <div className="DList">
                <h1>DummyList</h1>
                <h2>value : </h2>
            </div>
        </>
    )
}