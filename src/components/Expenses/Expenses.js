
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import { useState } from 'react';
import './Expenses.css';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        // console.log(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);


    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
            <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
            <ExpensesList items={filteredExpenses}></ExpensesList>


        </Card>
    );
};

export default Expenses;