import React, { useState } from 'react';
import './App.css';
import {TodoList} from './firstList'

function App() {


  const [data, setData]= useState(0)
  function handling(){
    setData (data+1)
  }
  function decrese(){
    setData (data-1)
  }


  const [name, setName]= useState("My name is Amit")
  function change(){
    setName ("My name is Rajan")

  }


  
  return (
    <div className="App">

    <TodoList/>

      <h1 style={{color:"red"}}>{data}</h1>
      <button onClick={handling} style={{padding:"10px" , margin:"10px", cursor:"pointer"}} >INCR++</button>
      <button onClick={decrese} style={{padding:"10px", margin:"10px" , cursor:"pointer"}} >DECR--</button>


    <h2 >{name}</h2>
    <button onClick={change} >Change Name</button>
    </div>
  );
}

export default App;
