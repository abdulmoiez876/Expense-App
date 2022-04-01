import { useState } from 'react';
import './Expenses.css';
import './ExpenseDate.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2018');

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }
  
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected = {filteredYear}
        onChangeFilter = {filterChangeHandler}
      />
      <ExpensesChart
        expensesList =  {filteredExpenses}
      />
      <ExpensesList
        filteredExpenses = {filteredExpenses}
      />
    </Card>
  )
}

export default Expenses;