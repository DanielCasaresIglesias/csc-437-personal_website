// AddTaskForm.jsx
import { useState } from 'react';

function AddTaskForm({ onNewTask }) {
  const [taskName, setTaskName] = useState(''); // Track the text field state

  const handleAddTask = () => {
    if (taskName.trim()) {
      onNewTask(taskName); // Pass the task name to the parent (App)
      setTaskName(''); // Clear the input field after adding the task
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        className="w-50 h-10 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border-2 border-black rounded-md pl-3 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-black hover:border-black"
        placeholder="New task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)} // Update the state on change
      />
      <button
        className="w-auto bg-blue-500 hover:bg-blue-700 active:bg-blue-900 text-white font-normal px-2 rounded flex items-center"
        onClick={handleAddTask} // Call handleAddTask on click
      >
        Add task
      </button>
    </div>
  );
}

export default AddTaskForm;
