import ExpenseItem from "./ExpenseItem";
import './ExpensesDisplay.css'
import Card from "../UI/Card";

const ExpensesDisplay = props => {
  return (
    <Card className="expenses">
      <ExpenseItem expenses={props.expenses}
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      />
    </Card>
  );
}

export default ExpensesDisplay;
