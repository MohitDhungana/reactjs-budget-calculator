import React from 'react';
import Item from './ExpenseItem';

import { MdDelete } from 'react-icons/md';

const ExpenseList = ({ expenses, clearItems, handleEdit, handleDelete }) => {
  return (
    <>
      <ul className="list">
        {expenses.map((expense) => {
          return (
            <Item
              key={expense.id}
              expense={expense}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          );
        })}
      </ul>
      {expenses && (
        <button className="btn" onClick={clearItems}>
          Clear expenses
          <MdDelete className="btn-icon" />
        </button>
      )}
      {/* {expenses.length>0 && <button className="btn">Clear expenses</button>} */}
    </>
  );
};

export default ExpenseList;
