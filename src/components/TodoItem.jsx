import React from 'react'

const TodoItem = ({ id, name, completed, onDeleteTodo }) => (
    <li className={completed ? "completed" : ""}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>{name}</label>
        <button className="destroy" onClick={() => onDeleteTodo(id)}/>
      </div>
      <input className='edit' value={name} onChange={() => {}} />
    </li>
)

export default TodoItem
