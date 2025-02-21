// AddTaskForm.js
function AddTaskForm({ addTask }) {
    const handleAddTask = () => {
      const newTask = { id: Date.now(), name: 'New task' }; // Example new task
      addTask(newTask);
    };
  
    return (
      <div className="flex items-center space-x-2">
        <input
          className="w-50 h-10 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border-2 border-black rounded-md pl-3 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-black hover:border-black"
          placeholder="New task name"
        />
        <button
          className="w-auto bg-blue-500 hover:bg-blue-700 active:bg-blue-900 text-white font-normal px-2 rounded flex items-center"
          onClick={handleAddTask} // Call the addTask function passed via props
        >
          Add task
        </button>
      </div>
    );
  }
  
  export default AddTaskForm;
  