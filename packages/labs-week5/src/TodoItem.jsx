// TodoItem.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

// TodoItem.jsx
function TodoItem({ task, onToggleCompletion, onDelete }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleCompletion(task.id)} // Toggle completion when checkbox changes
        />
        {task.name}
      </label>
      <button onClick={onDelete} className="p-2 bg-transparent">
        <FontAwesomeIcon
          icon={faTrashCan}
          className="text-gray-500 hover:text-gray-700 active:text-gray-800"
          title="Delete"
        />
      </button>
    </li>
  );
}

export default TodoItem;
