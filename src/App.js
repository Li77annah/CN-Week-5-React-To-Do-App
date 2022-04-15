import {useState } from "react"
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([""])
  const [textInput, setTextInput] = useState("")

  const updateInput = (event) => {
    setTextInput(event.target.value)
  }

  const addTask = () => {
    let addList = [...tasks]
    addList.push(textInput)
    setTasks(addList)
  }

  const deleteTask = (index) => {
    let deleteList = [...tasks]
    deleteList.splice(index, 1)
    setTasks(deleteList)
  }

  return (
    <div id="container">
      <h1 id="title">YOUR TO DO LIST</h1>
      <h2 id="task1">Task 1: Be Fabulous</h2>
      <div id="formInput">
        <input placeholder="Type task here" onChange={updateInput}/>
        <button onClick={addTask}>ADD TASK</button>
        <button onClick={deleteTask}>DELETE TASKS</button>
        {tasks.map((item, index) => {
          return (
            <div>
              <p>{item}</p>
              <input type="checkbox" defaultChecked={false}/>
            </div>
          )

        })}
      </div>
    </div>
  )
}
export default App