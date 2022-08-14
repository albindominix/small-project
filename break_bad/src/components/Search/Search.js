import React, { useState } from 'react'
import './Search.css'
export default function Search({getQuery,item}) {
 const [text,setText]= useState('')
// const boxText= (q)=>{          //added just for additional function check the video min 28
// setText(q)                     // for this fucntion to work just chnage setText to boxText in the input field onChange
// getQuery(q)

// }
// getQuery(text) //direct implimentation with out the submit button


const onSubmit=(e)=>{
e.preventDefault();
const searchText=()=>{
  return getQuery(text)
}
searchText()
}

  return (
    <div className='formDiv'>
   <form  onSubmit={onSubmit}role="search">
    <label htmlFor="search">Search for stuff</label>
    <input value={text} 
    onChange={(e)=>setText(e.target.value)} 
    type="search"
    placeholder="Search..." 
    autofocus required />
    <button type="submit">Go</button>    
  </form>
    </div>
 
  )
}
