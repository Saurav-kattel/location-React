import {useState} from "react";
import Card from "./Card";
import "./style.css"

const App = ()=>{
const [count , setCount] = useState(0);

function countIncrease(){
setCount(count + 1)
}

function countDecrease(){
setCount(count - 1)
}

function Button(props:any){
return(
<button className="button" onClick={props.func}>{props.name}</button>
)
}

return (
<>
<div  className="div">
{count}
{navigator.onLine ? <Card/> : "No internet Connection]"}
</div>
<Button name="Click" func={countIncrease}/>
<Button name="Decrease" func={countDecrease}/>
</>
)
}

export default App;
