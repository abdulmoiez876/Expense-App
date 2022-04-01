import AddExpensesButton from './AddExpenseButton';
import ExpenseForm from './ExpenseForm';

function NewExpenseDisplay(props) {

    function showFormHandler() {
        props.showForm();
    }
    if (props.renderForm) {
        return (
            <ExpenseForm
                showForm = {showFormHandler}
                onSaveNewExpenseData={props.onSaveNewExpenseDataHandler}
            />
        )
    }
    else {
        return (
            <AddExpensesButton
                showForm = {showFormHandler}
            />
        )
    }
}

export default NewExpenseDisplay;