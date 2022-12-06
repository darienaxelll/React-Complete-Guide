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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter 
          selected={filteredYear} 
          onChangeYear={changeYear} 
        />
        {filteredExpenses.length === 0 ? (
          <p>No expenses found.</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
      </Card>
    </div>
  );
};

export default ExpensesDisplay;
