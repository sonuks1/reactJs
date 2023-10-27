import {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
 

// const addValue = ()=>{
//   counter = counter+1
//   console.log(counter);
// }
// let counter =10
function App() {
  let [counter , setCounter] = useState(10);

let addValue = ()=>{
  if(counter<20){
  setCounter(counter + 1)
  }
}
let decreaseValue = ()=>{
  if (counter >0){
    setCounter(counter - 1)
}
}

  return (
    <>
    <h1>rect start learning</h1>
    <h2>Counter :{counter} </h2>
    <button onClick = {addValue}>increse the value</button>
    <button onClick  = {decreaseValue}>decrese the value</button>

    </>
  );
}

export default App;
