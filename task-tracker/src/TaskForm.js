import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({ title: '', description: '', dueDate: '', status: 'Pending' });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask({ title: '', description: '', dueDate: '', status: 'Pending' });
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <h2 className="text-center mb-4">Add Task</h2>
      <input type="text" name="title" value={task.title} onChange={handleChange} placeholder="Title" className="form-control" required />
      <textarea name="description" value={task.description} onChange={handleChange} placeholder="Description" className="form-control" required />
      <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} className="form-control" required />
      <select name="status" value={task.status} onChange={handleChange} className="form-select">
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit" className="btn btn-success">Add Task</button>
    </form>
  );
};

export default TaskForm;
