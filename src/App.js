import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[name,setName]=useState("default")
  const [income,setIncome]=useState("high");
 
  const handlechange=(e)=>{
    setName(e.target.value)
  }

  const handleIncomechange=(e)=>{
    setIncome(e.target.value)
  }
 const handleSubmit=()=>{
   console.log("state=",name,income);
 }
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <div>
            <span>name:</span>
              <input type="text" value={name} onChange={handlechange}></input>
              <span>income</span>
              <select onChange={handleIncomechange}>
                <option value="high">income:high</option>
                <option value="mid">income:mid</option>
                <option value="low">income:low</option>
              </select>
              <input type="submit" value="submit"></input>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
