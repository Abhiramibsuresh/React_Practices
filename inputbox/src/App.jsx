import {useState} from "react";
import App from "./Name";
import Name from "./Name";

function App(){
  const [name,setName]=useState("");
  return(
    <>
    <div>
      <h1>Good Morning!</h1>
      <input type="text" placeholder="Enter Your Name" value={name} onChange={(e)=>setName(e.target.value)}/>
      <p>Your Name :{name}</p>
    </div>
    <Name />  
    </>
  )
}
export default App