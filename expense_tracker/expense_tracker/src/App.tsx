import {type Transaction} from './types/expenseType'
import { useState } from 'react';



export const App = () =>{


  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [type, setType] = useState<"income" | "expense">("expense");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("food");
  const [date, setDate] = useState("");
  const [filter, setFilter] = useState("all");
  const [editId, setEditId] = useState<number | null>(null);

 const addTransaction = () =>{
  const newTransaction:Transaction = {
      id: Date.now(),
      title,
      amount:Number(amount),
      type,
      category,
      date
  };

  setTransactions([...transactions,newTransaction]);
  setTitle("");
  setAmount("");
  setCategory("food");
  setDate("");
 }

const totalTransactions = transactions.length;
const totalExpenses = transactions.reduce(
  (total, item) => total + item.amount,
  0
);

  return <div className="flex flex-col justify-center items-center bg-slate-200">
    <form onSubmit={(e) => {e.preventDefault();addTransaction();}} className="flex flex-col  gap-5 bg-white px-20 py-10 my-10 rounded-lg" >
      <h1 className="text-center font-bold text-blue-600 text-3xl mt-10">Expense Tracker</h1>
   
    {/* <label htmlFor="type">Transaction type</label> */}
      <div className="flex gap-8">
        <div className='bg-blue-500 text-white w-40 h-25 rounded-md'>
          <h2 className='mt-4 text-center'>Total Transactions</h2>
          <h1 className="text-2xl font-bold text-center">{totalTransactions}</h1>
        </div>

        <div className='bg-blue-500 text-white w-40 h-25 rounded-md'>
          <h2 className='mt-4 text-center'>Total Expenses</h2>
          <h1 className="text-2xl font-bold text-center">${totalExpenses}</h1>
        </div>

      </div>
      

     <label htmlFor="title">Title</label>
     <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Enter Transaction Alert" className="outline-none border border-blue-300 rounded-md p-2" required/>

     <label htmlFor="amount">Amount</label>
     <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter Amount" className="outline-none border border-blue-300 rounded-md p-2" required/>

     <label htmlFor="category">Category</label>
         <select id="category" value={category} onChange={(e)=>setCategory(e.target.value)} className="outline-none border border-blue-300 rounded-md p-2" required>
            <option value="food">Food</option>
            <option value="travel">Travel</option>
            <option value="shopping">Shopping</option>
            <option value="salary">Salary</option>
            <option value="other">Other</option>
        </select>

     <label htmlFor="date">Date</label>
     <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} placeholder="Date" className="outline-none border border-blue-300 rounded-md p-2" required/>

     <button type="submit" className="outline-none bg-blue-600 text-white rounded-md p-2">Add Transaction</button>
    </form>


<div className="mt-8 flex flex-col gap-3 w-130 mb-20">
  <h2 className="text-xl font-bold text-blue-600">Recent Transactions</h2>

  {transactions.length === 0 ? (
  <p>No transactions added yet.</p>
) :(transactions.map((item) => (
    <div key={item.id} className="bg-white p-4 rounded-md shadow flex justify-between">

      <div>
        <h3 className="font-bold text-blue-500">{item.title}</h3>
        <p className="text-gray-300 font-semibold">{item.category} | {item.date}</p>
      </div>

      <p className="font-bold text-red-500">
        ₹{item.amount}
      </p>

    </div>
  ))
  )}
</div>
  </div>
}