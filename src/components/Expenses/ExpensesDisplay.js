import ExpenseItem from "./ExpenseItem";
import "./ExpensesDisplay.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const ExpensesDisplay = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const changeYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expenseContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeYear={changeYear} />

        {expenseContent}
      </Card>
    </div>
  );
};

export default ExpensesDisplay;
