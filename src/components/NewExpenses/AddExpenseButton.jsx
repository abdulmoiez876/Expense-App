function AddExpenseButton(props) {
    function clickHandler(event) {
        event.preventDefault();
        props.showForm();
    }
    return (
        <div>
            <button type="submit" onClick={clickHandler}>Add Expense</button>
        </div>
    )
}

export default AddExpenseButton;