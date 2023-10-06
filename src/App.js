import React, { useState } from 'react';
import Header from './mycoomponent/Header';
import {Todos} from './mycoomponent/Todos';
import {Footer} from './mycoomponent/Footer';

function App() {
  const onDelete = (todo) =>{
    setTodos(todos.filter((e) => {
      return e!==todo;
    }));
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "todolist1"
    },
    {
      sno: 2,
      title: "todolist2"
    },
    {
      sno: 3,
      title: "todolist3"
    },
  ]);


  return (
    <>
      <Header title="Todos"/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer />
    </>
  )
}

export default App;