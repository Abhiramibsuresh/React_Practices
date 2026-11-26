import { useState} from "react";

function ShowHide(){
    const [show,setShow]=useState(false)
    return(
        <div>
            <button onClick={()=>setShow}>{show ? "Hide" : "Show"}</button>
            {show && <p>Hello Welcome To React</p>}
            </div>
    )
}
export default ShowHide