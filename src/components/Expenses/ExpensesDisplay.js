import ExpenseItem from "./ExpenseItem";
import "./ExpensesDisplay.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const ExpensesDisplay = (props) => {
  const changeYear = selectedYear => {
    console.log('In ExpenseDisplay.js');
    console.log(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onChangeYear={changeYear} />

        <ExpenseItem
          expenses={props.expenses}
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
    </div>
  );
};

export default ExpensesDisplay;
