import { useState } from 'react'
import Dictionary from './Dictionary'
import ListMap from './ListMap'
import DictionaryMap from './DictionaryMap'

function App(){
  const students = ['Anu','Rahul','Meera','Arun']
  return(
    // <div>
    //   <h2>Students List</h2>
    //   <ul>
    //     <li>{students[0]}</li>
    //     <li>{students[1]}</li>
    //     <li>{students[2]}</li>
    //   </ul>
    // </div>
    // <Dictionary />
    // <ListMap />
    <DictionaryMap />
  )
}
export default App