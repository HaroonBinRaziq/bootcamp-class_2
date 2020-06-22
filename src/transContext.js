import React, { createContext, useReducer } from "react";
import TransactionReducer from "./transReducer";
const intialTransactions = [
    {amount: 500, desc: "Cash"},
    {amount: -50, desc: "Book"},
    {amount: 100, desc: "Deposit"},
    {amount: -200, desc: "Bill"}
]

export const TransactionContext = createContext(intialTransactions);

export const TransactionProvider = ({children}) =>{
    let [state, dispatch] =useReducer(TransactionReducer,intialTransactions);

    function addTransaction(transObj) {
        dispatch({
            type: "Add_Transaction", 
            payload: {
                amount: transObj.amount, 
                desc: transObj.desc
                },
        })
    }
    return(
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction
        }}>
            {children}

        </TransactionContext.Provider>
    )
}
