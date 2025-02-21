import React, { useState } from "react";
import { Spinner } from "./Spinner";
import './groceryPanel.css';

const MDN_URL = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";

function delayMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function GroceryPanel(props) {
  const [groceryData, setGroceryData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);  // Loading state
  const [error, setError] = useState(null);  // Error state

  // Fetch data from the selected URL
  async function fetchData(url) {
    setError(null);  // Reset error state at the start
    setIsLoading(true);  // Set loading state to true

    try {
      console.log("fetching data from " + url);
      
      // Simulate delay
      await delayMs(2000); // Wait 2 seconds

      // Fetching data (in a real-world scenario, use `fetch(url)` instead)
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      
      setGroceryData(data);  // Set the fetched data
    } catch (err) {
      setError('Failed to fetch grocery prices');  // Set error state
    } finally {
      setIsLoading(false);  // Set loading state to false
    }
  }

  // Handler for dropdown change
  function handleDropdownChange(event) {
    const url = event.target.value;
    if (url) {
      setGroceryData([]);  // Clear grocery data before fetching new data
      fetchData(url);  // Fetch data from the selected URL
    } else {
      setGroceryData([]);  // Clear grocery data if "None selected"
    }
  }

  // Handler for adding a grocery item to To-Do list
  function handleAddTodoClicked(item) {
    const todoName = `Buy ${item.name} (${item.price.toFixed(2)})`;
    props.onAddTask(todoName);  // Call onAddTask (which is addTask from App.jsx)
  }

  return (
    <div>
      <h1 className="text-xl font-bold">Grocery prices today</h1>
      <label className="mb-4 flex gap-4">
        Get prices from:
        <select
          className="border border-gray-300 p-1 rounded-sm disabled:opacity-50"
          onChange={handleDropdownChange}
          disabled={isLoading}  // Disable the dropdown when loading
        >
          <option value="">(None selected)</option>
          <option value={MDN_URL}>MDN</option>
          <option value="invalid">Who knows?</option>
        </select>
        {isLoading && <Spinner className="ml-2" />}  {/* Show spinner while loading */}
      </label>

      {error && <p className="text-red-500">Error: {error}</p>} {/* Show error if any */}

      {groceryData.length > 0 ? (
        <PriceTable items={groceryData} onAddClicked={handleAddTodoClicked} />
      ) : (
        !isLoading && !error && "No data"
      )}
    </div>
  );
}

function PriceTable(props) {
  return (
    <table className="mt-4">
      <thead>
        <tr>
          <th className="text-left">Name</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map(item => (
          <PriceTableRow
            key={item.name}
            item={item}
            onAddClicked={() => props.onAddClicked(item)}  // Pass item to onAddClicked
          />
        ))}
      </tbody>
    </table>
  );
}

function PriceTableRow({ item, onAddClicked }) {
  const buttonClasses = `italic px-2 rounded-sm border border-gray-300 hover:bg-gray-100 active:bg-gray-200 cursor-pointer`;
  return (
    <tr>
      <td>{item.name}</td>
      <td>${item.price.toFixed(2)}</td>
      <td>
        <button className={buttonClasses} onClick={onAddClicked}>
          Add to todos
        </button>
      </td>
    </tr>
  );
}
