import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import TodoItem from './TodoItem'; // Import the TodoItem component
import AddTaskForm from './AddTaskForm'; // Import the AddTaskForm component

function App() {
  // Task state with data for each task
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Eat' },
    { id: 2, name: 'Sleep' },
    { id: 3, name: 'Repeat' },
  ]);

  // Function to add tasks
  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <main className="m-4">
      {/* Add Task Form */}
      <AddTaskForm addTask={addTask} /> {/* Pass the addTask function to AddTaskForm */}

      {/* Todo List */}
      <section className="mt-6">
        <h1 className="text-xl font-bold">To do</h1>
        <ul>
          {tasks.map((task) => (
            <TodoItem key={task.id} task={task} /> // Dynamically render TodoItem
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;