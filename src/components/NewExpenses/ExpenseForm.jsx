import {useState} from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    function changeHandler (event) {
        var data = event.target.value;
        var field = event.target.name;

        if(field === 'titleField') {
            setEnteredTitle(data);
        }
        else if(field === 'dateField') {
            setEnteredDate(data);
        }
        else {
            setEnteredAmount(data);
        }
    }

    function submitHandler(event) {
        event.preventDefault();
        if(event.target.value === 'submit') {
            const newExpenseData = {
                title: enteredTitle,
                amount: enteredAmount,
                date: new Date(enteredDate)
            }
            
            props.onSaveNewExpenseData(newExpenseData);
            setEnteredTitle('');
            setEnteredAmount('');
            setEnteredDate('');
        }
        else {
            props.showForm();
        }
    }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input type="text" name='titleField' onChange={changeHandler} value={enteredTitle} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input name='amountField' type="number" onChange={changeHandler} value={enteredAmount} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input type="date" name='dateField' onChange={changeHandler} value={enteredDate} />
                </div>
                <div className="new-expense__actions">
                    <button onClick={submitHandler} name='formButton' value = 'submit' type="submit">Add Expense</button>
                </div>
                <div className="new-expense__actions">
                    <button onClick={submitHandler} name='formButton' value = 'hide'>Hide Section</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;