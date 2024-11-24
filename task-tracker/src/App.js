import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);

  const editTask = (index) => {
    const newTasks = [...tasks];
    const updatedTask = prompt('Edit Task Title:', tasks[index].title);
    if (updatedTask) {
      newTasks[index].title = updatedTask;
      setTasks(newTasks);
    }
  };

  const deleteTask = (index) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="container">
      <h1 className="text-center mb-4">Task Tracker</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
