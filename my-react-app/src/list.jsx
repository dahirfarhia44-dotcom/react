import React from 'react'

function List() {
    const todos = [
        {id: 1, text: "do assignments"},
        {id: 2, text: "go to the gym"},
        {id: 3, text: "go to the store"},
        {id: 4, text: "go to the park"},
    ];
  return (
    <div>
        <h2>My Todo List</h2>
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
    </div>
  )
}

export default List;