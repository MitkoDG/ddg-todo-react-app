import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022')

  const filteredExpenses = props.items.filter(i => {
    return i.date.getFullYear().toString() === filteredYear;
  })

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  let expensesContent = <p>No expenses found !</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date} />
    ))
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

        { expensesContent }

      </Card>
    </div>
  );
}

export default Expenses;
