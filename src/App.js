import React from 'react';
import './App.css';

import { v4 as uuid } from 'uuid';

import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import Alert from './components/Alert';

const initialExpenses = [
  {
    id: uuid(),
    charge: 'rent',
    amount: '1600',
  },
  {
    id: uuid(),
    charge: 'car payment',
    amount: '400',
  },
  {
    id: uuid(),
    charge: 'creadit card bill',
    amount: '1200',
  },
];
console.log(initialExpenses);

function App() {
  return (
    <>
      <Alert></Alert>
      <ExpenseForm />
      <ExpenseList />
    </>
  );
}

export default App;
