import React, { useState } from 'react';
import './App.css';
import TodoItem from './TodoItem';
import AddTaskForm from './AddTaskForm';
import Modal from './Modal';

function App() {
  const [taskList, setTaskList] = useState([
    { id: 1, name: 'Eat', completed: false },
    { id: 2, name: 'Sleep', completed: false },
    { id: 3, name: 'Repeat', completed: false }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open/close state

  // Add task to the list
  const addTask = (taskName) => {
    const newTask = { id: Date.now(), name: taskName, completed: false };
    setTaskList((prevTaskList) => [...prevTaskList, newTask]);
    setIsModalOpen(false); // Close modal after adding the task
  };

  // Toggle task completion status
  const toggleCompletion = (taskId) => {
    setTaskList((prevTaskList) =>
      prevTaskList.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="m-4">
      {/* Add Task Button */}
      <button
        onClick={openModal}
        className="p-1 bg-blue-500 text-white"
      >
        Add Task
      </button>

      {/* Modal for Adding Task */}
      <Modal
        headerLabel="Add New Task"
        isOpen={isModalOpen}
        onCloseRequested={closeModal}
      >
        <AddTaskForm onNewTask={addTask} />
      </Modal>

      {/* Todo List */}
      <section className="mt-6">
        <h1 className="text-xl font-bold">To do</h1>
        <ul>
          {taskList.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              onToggleCompletion={toggleCompletion}  // Pass the toggle function
              onDelete={() => {
                setTaskList(taskList.filter((t) => t.id !== task.id)); // Delete the task
              }}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
