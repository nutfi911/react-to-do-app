import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14)
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.42,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 293.4,
    date: new Date(2021, 2, 27)
  }
];
function App() {

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (newExpense) => {
    setExpenses(previousExpenses => [newExpense, ...previousExpenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
