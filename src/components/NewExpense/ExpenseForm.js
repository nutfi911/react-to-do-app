import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     title: '',
    //     amount: '',
    //     date: '',
    // });


    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);

        // setUserInput({
        //     ...userInput,
        //     title: e.target.value
        // });

        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         title: e.target.value
        //     }
        // });
    };

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);

        // setUserInput({
        //     ...userInput,
        //     amount: e.target.value
        // });
    };

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);

        // setUserInput({
        //     ...userInput,
        //     date: e.target.value
        // })
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: enteredDate
        };

        console.log(expenseData);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control" onChange={titleChangeHandler}>
                    <label>Title</label>
                    <input type="text" />
                </div>
                <div className="new-expense__control" onChange={amountChangeHandler}>
                    <label>Amount</label>
                    <input type="number" min="1" step="1" />
                </div>
                <div className="new-expense__control" onChange={dateChangeHandler}>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form >
    );
};

export default ExpenseForm;