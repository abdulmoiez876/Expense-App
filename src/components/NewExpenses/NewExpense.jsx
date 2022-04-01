import {useState} from 'react';
import './NewExpense.css';
import Card from '../UI/Card';
import NewExpenseDisplay from './NewExpenseDisplay';

function NewExpense(props) {
    const [addSelector, setAddSelector] = useState(false);

    function showFormHandler() {
        setAddSelector((prev) => {
            return !prev;
        });
    }

    function onSaveNewExpenseDataHandler(newExpenseData) {
        props.getNewExpenseData(newExpenseData);
    }

    return (
        <Card className="new-expense">
            <NewExpenseDisplay
                renderForm = {addSelector}
                onSaveNewExpenseDataHandler = {onSaveNewExpenseDataHandler}
                showForm = {showFormHandler}
            />
        </Card>
    )
}

export default NewExpense;