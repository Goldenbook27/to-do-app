import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateToDo } from './components/CreateTodo'
import { ShowToDo } from './components/ShowToDo'

function App() {
  const [todos, setTodos] = useState([])
  fetch("http://localhost:3000/todos").then(async function(res){
    const json = await res.json()
    setTodos(json.todos)
  })
  return (
    <>
      <CreateToDo/>
      <ShowToDo todos={todos}/>
    </>
  )
}

export default App
