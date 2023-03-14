
import React, {useState} from "react";

function TodoList(){
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [count, setCount] = useState(0);

  const countTask = ()=>{
    setCount(count+1)
  }

  const decreaseTask = () => {
    if(count > 0){
      setCount(count-1)
    }
  }

  const handleBoth1 = (index)=> {
    decreaseTask();
    handleComplete(index)
  }

  const handleBoth2 = (index) =>{
    decreaseTask();
    handleDelete(index)

  }

  const handleSubmit = e => {
    e.preventDefault();
    setTasks([...tasks, {text: newTask, completed: false}])
    setNewTask('')
  }

  const handleComplete = index => {
    const newTasks = [...tasks]
    newTasks[index].completed = !newTasks[index].completed
    setTasks(newTasks)
  }

  const handleDelete = index => {
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }


  return(

    <div>
      <h1>Pending Tasks({count})</h1>
      <form onSubmit = {handleSubmit} >
        <input
        type="text"
        value={newTask}
        onChange = {e => setNewTask(e.target.value)}
        />

        <button type="submit" onClick={countTask}>Add Task</button>

      </form>

      <ul>
        {tasks.map((task, index) => (
          <li
            key = {index}
            style = {{textDecoration: task.completed ? 'line-through' : 'none'}} 
          >

            {task.text}
            <button onClick = {() => handleBoth1(index)}>complete</button>
            <button onClick = {() => handleBoth2(index)}>Delete</button>
          </li>
        ) )}
      </ul>

    </div>
  )

}

export default TodoList