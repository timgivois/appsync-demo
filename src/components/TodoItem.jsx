import React from 'react'

const TodoItem = ({ name, completed }) => (
    <li className={completed ? "completed" : ""}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>{name}</label>
        <button className="destroy"/>
      </div>
      <input className='edit' value={name} onChange={() => {}} />
    </li>
)

export default TodoItem
