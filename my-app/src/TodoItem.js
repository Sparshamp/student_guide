/*import React from 'react';

function TodoItem({ task, onEdit, onDelete, onToggleComplete }) {
  const { description, category, completed } = task;
  
  const taskStyle = {
    textDecoration: completed ? 'line-through' : 'none',
    color: completed ? 'red' : 'black',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  };

  return (
    <div style={taskStyle}>
      <div>
        <strong>{description}</strong> - {category}
      </div>
      <div>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggleComplete(task.id)}
        />
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;*/

/*import React from 'react';
import './App.css';

function TodoItem({ task, onEdit, onDelete, onToggleComplete }) {
  const { description, category, completed } = task;
  
  return (
    <div className="task-item">
      <div style={{ textDecoration: completed ? 'line-through' : 'none', color: completed ? '#FF0000' : '#333' }}>
        <strong>{description}</strong> - {category}
      </div>
      <div>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggleComplete(task.id)}
        />
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;*/

import React from 'react';
import './App.css';

function TodoItem({ task, onEdit, onDelete, onToggleComplete }) {
  const { name, description, date, time, status, completed } = task;
  
  return (
    <div className="task-item">
      <div style={{ textDecoration: completed ? 'line-through' : 'none', color: completed ? '#FF0000' : '#333' }}>
        <strong>{name}</strong> - {description} <br />
        <small>Date: {date}</small> <br />
        <small>Time: {time}</small> <br />
        <small>Status: {status}</small>
      </div>
      <div>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggleComplete(task.id)}
        />
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;


