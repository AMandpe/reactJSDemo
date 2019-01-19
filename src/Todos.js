import React from 'react'

const Todos = ({todos, deleteTodo}) => {
  const todosList = todos.length ? (
    todos.map(dos => {
      return (
        <div className='collection-item' key={dos.id}>
          <span onClick={() => { deleteTodo(dos.id) }}>{dos.content}</span>
        </div>
      )
    })
  ) : (
    <p className='center'> You have no todos left, yay </p>
  )
  return (
    <div className='todos collection'>
      { todosList }
    </div>
  )
}

export default Todos
