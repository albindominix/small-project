import React, { useState } from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


export default function Transaction() {
const {addTransaction}= useContext(GlobalContext)
    const [text,setText]=useState('')
    const [amount,setAmount]=useState(0)

    const onSubmit=(e)=>{
      e.preventDefault();
      const newTransaction={
        id: Math.floor(Math.random()*100000000),
        text,
        amount:+amount  // + sign is ittillel string aayittu verum listill watch min 47 on his video
      }
      addTransaction(newTransaction)
    }
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text"
           placeholder="Enter text..." 
           value={text}
           onChange={(e)=>setText(e.target.value)}
           />
        </div>
        <div class="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number"
           placeholder="Enter amount..." 
           value={amount}
           onChange={(e)=>setAmount(e.target.value)}
           />
        </div>
        <button class="btn">Add transaction</button>
      </form>
    </>
  )
}
