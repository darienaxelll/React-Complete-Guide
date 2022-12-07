import ExpenseItem from "./ExpenseItem";
import './ExpenseItem.css';

const ExpensesList = props => {
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

  return <ul className="expenses-list">

  </ul>
};

export default ExpensesList;