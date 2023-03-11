import React, {useState} from "react";

export function TodoList(){
const[list, setList]= useState([])
const[task, setTassk]= useState("")

function handleEvent(event){
  setTassk(event.target.value)
}

function addList(){
  setList([...list, task])
}
return(

    <div>
    <input style={{margin:"5px"}}  onChange={handleEvent} />
    <button onClick={addList}  >Add</button>

    {list.map((e) => { return <h3>{e}</h3>})}


    </div>
)

}