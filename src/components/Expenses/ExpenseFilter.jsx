import { useState } from 'react';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseFilter(props) {
  const [filterYear, setFilterYear] = useState("2018");

  function filterYearChangeHandler(event) {
    let year = event.target.value;
    setFilterYear(year);
    props.onChangeFilter(year);
  }

  return (
      <Card className="expense-item">
          <div className="expense-item__description">
            <h2>Filter by Year</h2>
          </div>
          <select className='expense-item__price' value={filterYear} onChange={filterYearChangeHandler}>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
      </Card>
  )
}

export default ExpenseFilter;