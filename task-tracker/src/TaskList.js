import React from 'react';

const TaskList = ({ tasks, editTask, deleteTask }) => {
  return (
    <div className="container mt-4">
      {tasks.length === 0 ? (
        <p className="text-center text-muted">No tasks available.</p>
      ) : (
        tasks.map((task, index) => (
          <div key={index} className="task-card">
            <div>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p><strong>Due:</strong> {task.dueDate}</p>
              <p><strong>Status:</strong> {task.status}</p>
            </div>
            <div>
              <button className="edit-btn" onClick={() => editTask(index)}>Edit</button>
              <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
