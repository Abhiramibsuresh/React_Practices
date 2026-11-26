import {useState} from "react";

function Name(){
  const [name,setName]=useState("");

  function handlesubmit(){
    setMessage("Hello"+name);
  }

  return(
    <div>
      <h1>Welcome</h1>
      <input type="text" placeholder="Enter Your Name" value={name} onChange={(e)=>setName(e.target.value)}/>
      <button onClick={handlesubmit}>Submit</button>
      <p>{message}</p>
    </div>
  )
}
export default Name