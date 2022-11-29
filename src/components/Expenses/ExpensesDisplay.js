import ExpenseItem from "./ExpenseItem";
import "./ExpensesDisplay.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const ExpensesDisplay = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const changeYear = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeYear={changeYear} />

        {props.expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default ExpensesDisplay;
