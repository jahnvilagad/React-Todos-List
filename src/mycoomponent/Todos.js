import React from 'react'
import { Todo } from '../mycoomponent/Todo';

export const Todos = (props) => {
  return (
    <div className='container'>
      <h2>Todos List</h2>
      {props.todos.length === 0 ? "no todos display" :
        props.todos.map((todo) => {
          return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
        })
      }

    </div>


  )
}
