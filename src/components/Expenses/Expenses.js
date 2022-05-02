import React, { useState } from 'react';
import ExpensesChart from '../ExpensesChart';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022')

  const filteredExpenses = props.items.filter(i => {
    return i.date.getFullYear().toString() === filteredYear;
  })

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };



  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />

      </Card>
    </div>
  );
}

export default Expenses;
