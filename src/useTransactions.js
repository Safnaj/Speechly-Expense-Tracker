import { useContext } from "react";
import { expenseTrackerContext } from "./context/context";
import { incomeCategories, expenseCategories, resetCategories } from "./constants/categories";


const useTransactions = (title) => {
    resetCategories();

    const { transactions } = useContext(expenseTrackerContext);
    const transactionsPerType = transactions.filter((t) => t.type === title);
    const total = transactionsPerType.reduce((acc, currVal) => acc += currVal.amount, 0 );
    const categories = title === 'income' ? incomeCategories : expenseCategories;

    console.log({transactionsPerType, total, categories});

    //Reduce is used to SUM
    // [2,2,3,2] => 9 

    transactionsPerType.forEach((t) => {
        const category = categories.find((c) => c.type === t.category)

        if(category) category.amount += t.amount;
    })
}