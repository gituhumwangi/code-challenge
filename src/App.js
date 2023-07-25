import './App.css';
import { useEffect, useState } from 'react';
import Table from "./components/Table"
import Form from './components/Form';

function App() {
  const [transactionData, setTransactionData] = useState([])
  useEffect(()=>{
    fetch(" http://localhost:3000/transactions") 
    .then(r=>r.json())
    .then(data=>{
      console.log(data)
      setTransactionData(data)
    })
  }, [])
 

  function handleUpdate (newTransaction) {
    setTransactionData([...transactionData, newTransaction ])
  }

  function handleDelete (transactionId) {
    const newTransactionData = transactionData.filter((transactionItem)=>{
      return transactionItem.id !== transactionId
      
    })
    setTransactionData(newTransactionData)
  }
 
  return (
    <div className="App">
      <h1>Flatiron's Bank App</h1>
     <Form handleUpdate={handleUpdate}/>
      <Table transactions= {transactionData} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
