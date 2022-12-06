import axios from 'axios';
import React, { useEffect, useState } from 'react'
import InputForm from '../components/InputForm'
import TodoList from '../components/TodoList';

const url = "https://63878fa2d9b24b1be3f43d73.mockapi.io/todos"

type AddFn = (text:string) => void;

const Home = () => {
  const [todos,setTodos] = useState<TodoType[]>([])

  const getTodos = async () => {
    try {
      const {data} = await axios.get<TodoType[]>(url)
      console.log(data)
      setTodos(data)
    } catch (error) {
      console.log(error)
    }
  }
  const addTodo:AddFn = async (text)=>{
    const newTodo = {
      task:text,
      isDone:false
    }
    try {
      await axios.post(url,newTodo)
      getTodos();
    } catch (error) {
      console.log(error)
    }
  }

  const toggleTodo:ToogleFn = async (item) => {
    try {
      await axios.put(`${url}/${item.id}`,{...item,isDone:!item.isDone});
      getTodos()
    } catch (error) {
      console.log(error)
    }
  }
  const deleteTodo:deleteFn = async (id)=>{
    try {
        await axios.delete(`${url}/${id}`)
        getTodos();
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getTodos()
  },[])
  

  return (
    <div className='main'>
      <InputForm  addTodo={addTodo}/>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  )
}

export default Home