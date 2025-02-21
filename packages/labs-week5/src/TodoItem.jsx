// TodoItem.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

function TodoItem({ task }) {
  return (
    <li>
      <label>
        <input type="checkbox" /> {task.name}
      </label>
      <button className="p-2 bg-transparent">
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
