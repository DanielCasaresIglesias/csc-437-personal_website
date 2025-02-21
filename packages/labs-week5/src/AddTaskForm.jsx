import React, { useState } from 'react';

function AddTaskForm({ onNewTask }) {
  const [taskName, setTaskName] = useState('');

  // Handle input change
  const handleChange = (e) => {
    setTaskName(e.target.value);
  };

  // Handle Add Task button click
  const handleAddTask = () => {
    if (taskName.trim()) {
      onNewTask(taskName); // Add new task to parent
      setTaskName(''); // Clear the input field
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskName}
        onChange={handleChange}
        className="w-full p-2 border-2 border-black rounded-md mb-2"
        placeholder="New task name"
      />
      <button
        onClick={handleAddTask}
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Task
      </button>
    </div>
  );
}

export default AddTaskForm;
