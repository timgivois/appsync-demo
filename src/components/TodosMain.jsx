import React from 'react'
import TodoItem from './TodoItem'

const TodosMain = ({ todos, onDeleteTodo }) => (
  <section className="main">
    <ul className="todo-list">
      {
        todos.map(todo => (
          <TodoItem key={todo.id}
            onDeleteTodo={onDeleteTodo}
            {...todo}
            />
        ))
      }
    </ul>
  </section>
)

export default TodosMain
