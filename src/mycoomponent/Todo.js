import React from 'react'

export const Todo = ({todo, onDelete}) => {
  return (
    <>
      <h3>{todo.sno}</h3>
      <p>{todo.title}</p>
      <button className='btn btn-danger btn-sm' onClick={()=>{onDelete(todo)}}>Delete</button>
    </>
  )
}
