import React, { useState } from 'react';
import './App.css';

import { v4 as uuid } from 'uuid';

import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import Alert from './components/Alert';

const initialExpenses = [
  {
    id: uuid(),
    charge: 'rent',
    amount: 1600,
  },
  {
    id: uuid(),
    charge: 'car payment',
    amount: 400,
  },
  {
    id: uuid(),
    charge: 'creadit card bill',
    amount: 1200,
  },
];

function App() {
  // **************** state values **************************
  // all expenses, add expense
  const [expenses, setExpenses] = useState(initialExpenses);

  // single expense
  const [charge, setCharge] = useState('');

  // single amount
  const [amount, setAmount] = useState('');

  // alert
  const [alert, setAlert] = useState({ show: false });

  // **************** functionality **************************

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  // handle alert
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== '' && amount > 0) {
      const singleExpense = { id: uuid(), charge, amount };
      setExpenses([...expenses, singleExpense]);
      handleAlert({ type: 'success', text: 'item added' });
      setCharge('');
      setAmount('');
    } else {
      handleAlert({
        type: 'danger',
        text: `charge cant be empty value and amount value has to be bigger than zero`,
      });
    }
  };

  // clear all items
  const clearItems = () => {
    setExpenses([]);
    console.log('cleared all items');
    handleAlert({ type: 'danger', text: 'all items deleted' });
  };

  // handle delete
  const handleDelete = (id) => {
    let tempExpenses = expenses.filter((item) => item.id !== id);
    setExpenses(tempExpenses);
    handleAlert({ type: 'danger', text: 'item deleted' });
  };

  // handle edit
  const handleEdit = (id) => {
    console.log(`item edited: ${id}`);
  };

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}

      <h1>Budget calculator</h1>
      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
        />
        <ExpenseList
          expenses={expenses}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          clearItems={clearItems}
        />
      </main>
      <h1>
        total spending:{' '}
        <span className="total">
          ${' '}
          {expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount));
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
