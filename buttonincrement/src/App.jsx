import {useState} from "react";
import Toggle from './Toggle';
import Loggedin from './Loggedin'


function App(){
  const[count,setCount]=useState(0)
  const[name,setName]=useState("")
  return(
    // <div>
    //    <Toggle />
    //    <Loggedin/>
    // </div>
   
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increase</button> 
      <button onClick={()=>setCount(count-1)}>Decrease</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </div>

    // <div>
    //   <h1>Hello {name}</h1>
    //   <button onClick={()=>setName("Abhirami")}>Set Button</button>
    // </div>
  )
}
export default App