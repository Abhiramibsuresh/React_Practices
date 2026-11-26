import { useState } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    console.log("Component loaded")
  }, [])
  return (
  <h1>Hello React</h1>
)
}
export default App