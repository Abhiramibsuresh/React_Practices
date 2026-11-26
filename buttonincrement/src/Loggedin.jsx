import { useState } from "react"

function Loggedin() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <div>
            {isLoggedIn ? (<h2>Welcome User</h2>) : (<h2>Please Login</h2>)}
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? "Logout" : "Login"}
            </button>
        </div>
)
}
export default Loggedin