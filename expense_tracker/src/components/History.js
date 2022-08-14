import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'
import TransactionList from './TransactionList'

export default function History() {

  const {transactions}=useContext(GlobalContext)
  console.log(transactions)
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction=>(
        <TransactionList key={transaction.id} transaction={transaction}/>
        ))}
       
      </ul>
    </>
  )
}
