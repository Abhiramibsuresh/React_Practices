import { useState } from "react"

function Login(){
    const [email,setEmail]=useState("")
    return(
        <div>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <p> Login : {email}</p>
        </div>
    )
}
export default Login