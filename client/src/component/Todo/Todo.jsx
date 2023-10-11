import React, { useState, useEffect } from 'react';
import './TodoStyle.css';
import { Link } from 'react-router-dom';

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [editingTaskIndex, setEditingTaskIndex] = useState(-1);
  

  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const editTask = (index) => {
    setEditingTaskIndex(index);
    setTaskInput(tasks[index]);
  };

  const updateTask = () => {
    if (taskInput.trim() !== '') {
      const updatedTasks = [...tasks];
      updatedTasks[editingTaskIndex] = taskInput;
      setTasks(updatedTasks);
      setTaskInput('');
      setEditingTaskIndex(-1);
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

 

  
    
  return (
    <div>
      <div className='logout'>
        <Link to='/weather'>
        <button className='weatherbutton' >Weather</button>
        </Link>
        <Link to='/'>
        <button className='navlogout' >
          Logout
        </button>
        </Link>
      </div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        {editingTaskIndex === -1 ? (
          <button onClick={addTask}>Add</button>
        ) : (
          <button onClick={updateTask}>Update</button>
        )}
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => editTask(index)}>Edit</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>

      
    </div>
  );
}

export default Todo;
