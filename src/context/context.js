import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    //Action Creators
    //Delete Transaction
    const deleteTransaction = (id) => {
        dispatch({ type : 'DELETE_TRANSACTION', payload : id });
    }

    //Add Transation
    const addTransaction = (transaction) => {
        dispatch({ type : 'ADD_TRANSACTION', payload : transaction })
    }

console.log(transactions);

    return(
        <ExpenseTrackerContext.Provider value = {{ 
            appName: 'Expense Tracker',
            deleteTransaction,
            addTransaction,
            transactions
            }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}