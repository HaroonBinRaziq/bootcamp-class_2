import React, { useContext, useState } from 'react';
import './App.css'
import { TransactionContext } from './transContext';


function Child() {
    let {transactions, addTransaction} = useContext(TransactionContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);

    const handleAddition = (event)=>{
        event.preventDefault()
        addTransaction({
            amount: Number(newAmount),
            desc: newDesc
        })
        if(Number(newAmount)===0)
        alert("Please Enter The correct Value");
        return false;
    }

    const getIncome =()=>{
        let income = 0;
        for (var i=0; i < transactions.length;i++){
            if(transactions[i].amount > 0)
            income = income + transactions[i].amount
        }
        return income;
    }
    

    const getExpense =()=>{
        let expense = 0;
        for (var i=0; i < transactions.length;i++){
            if(transactions[i].amount < 0)
            expense += transactions[i].amount
        }
        return expense;
    }

  return (
    <div className="container">
     <h1 className="text-center">Expense Tracker</h1>

     <div className="expense-container">
  <h3>Your Balance <br/> ${getIncome() + getExpense()}</h3>
     <h3>Your Income <br/> ${getIncome()}</h3>
     <h3>Your Expense <br/> ${getExpense()}</h3>
     </div>
     <h3>History</h3>
     <hr/>
     <ul className="transaction-list">
         {transactions.map((transObj, ind)=>{
         return(<li key={ind}>
             <span>${transObj.desc}</span>
             <span>${transObj.amount}</span>
         </li>
         )
         })}
     </ul>

     <h3>Add new transaction</h3>
     <hr/>  
     <form className="transaction-form" onSubmit={handleAddition}>
         <label>
             Enter Description <br/>
             <input type="text" onChange={(ev)=>setDesc(ev.target.value)} placeholder="Description" required/>
         </label>
         <br/>
         <label>
             Enter Amount <br/>
             <input type="number" onChange={(ev)=>setAmount(ev.target.value)} placeholder="Amount" required/>
         </label>
         <br/>
         <input type="submit" value="Add Transaction" required/>
     </form>
    </div>
  );
}

export default Child;
