import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

function ExpensesList(props) {
    let filteredExpenses = props.filteredExpenses;
    if (filteredExpenses.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses found</h2>;
    }

    return (
        <ul className="expenses-list">
        {filteredExpenses.map(function(expense, index) {
            return (
                <ExpenseItem
                    key={index}
                    date = {expense.date}
                    title = {expense.title}
                    amount = {expense.amount}
                />
            )
        })}
        </ul>
    )
}

export default ExpensesList;