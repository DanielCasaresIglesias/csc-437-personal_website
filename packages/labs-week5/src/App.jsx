import { useState } from 'react';
import './App.css';
import TodoItem from './TodoItem';
import AddTaskForm from './AddTaskForm';

const INITIAL_TASK_LIST = [
  { id: 1, name: 'Eat', completed: false },
  { id: 2, name: 'Sleep', completed: false },
  { id: 3, name: 'Repeat', completed: false }
];

function App() {
  const [taskList, setTaskList] = useState(INITIAL_TASK_LIST);

  // Add task function
  const addTask = (taskName) => {
    const newTask = { id: Date.now(), name: taskName, completed: false };
    setTaskList((prevTaskList) => [...prevTaskList, newTask]);
  };

  // Toggle task completion
  const toggleCompletion = (id) => {
    setTaskList((prevTaskList) =>
      prevTaskList.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete task function
  const deleteTask = (taskId) => {
    setTaskList((prevTaskList) => prevTaskList.filter((task) => task.id !== taskId));
  };

  // Delete all tasks
  const deleteAllTasks = () => {
    setTaskList([]);
  };

  return (
    <main className="m-4">
      <AddTaskForm onNewTask={addTask} />
      <button onClick={deleteAllTasks} className="p-1 bg-red-600 text-white">
        Delete all
      </button>

      <section className="mt-6">
        <h1 className="text-xl font-bold">To do</h1>
        <ul>
          {taskList.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              onToggleCompletion={toggleCompletion}
              onDelete={() => setTaskList(taskList.filter((t) => t.id !== task.id))}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
