import React from 'react'
import TodoItem from './TodoItem'

const TodosMain = ({ todos }) => (
  <section className="main">
    <ul className="todo-list">
      {
        todos.map(todo => (
          <TodoItem key={todo.id} {...todo}/>
        ))
      }
    </ul>
  </section>
)

export default TodosMain
