import './App.css';
import ExpenseItems from './components/ExpenseItems';

import { expenseData } from './components/AllContent'
function App() {

  return (
    <div className="App bg-dark">
      <ExpenseItems
        title={expenseData[0].title}
        price={expenseData[0].price}
        date={expenseData[0].date}
        img={expenseData[0].img}
      />
      <ExpenseItems
        title={expenseData[1].title}
        price={expenseData[1].price}
        date={expenseData[1].date}
        img={expenseData[1].img}
      />
      <ExpenseItems
        title={expenseData[2].title}
        price={expenseData[2].price}
        date={expenseData[2].date}
        img={expenseData[2].img}
      />
      <ExpenseItems
        title={expenseData[3].title}
        price={expenseData[3].price}
        date={expenseData[3].date}
      />
    </div>
  );
}

export default App;
