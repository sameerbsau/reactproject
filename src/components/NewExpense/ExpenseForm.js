import react, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEntredTItle] = useState("");

  const [enteredAmount, setEntredAmount] = useState("");
  const [enteredDate, setEntredDate] = useState("");



// const [userInput, setUserInput] =   useState({
//     enteredTitle : '',
//     enteredAmount : '',
//     enteredDate : ''
// });

  const titleChangeHandler = (event) => {
    setEntredTItle(event.target.value);
    // setUserInput({
    //     ...userInput,
    // enteredTitle: event.target.value
    // })
    // setUserInput((prevState) =>{
    //     return {...prevState, enteredTitle: event.target.value};
    // });
  };

  const amountChangeHandler = (event) => {
    setEntredAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value
    // })
  };

  const dateChangeHandler = (event) => {
    setEntredDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value
    // })
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            max="0.01"
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          ></input>
        </div>
        <div className="new-expense__actions">
          <button type="submit"> Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
