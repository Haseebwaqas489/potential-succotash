import { useState } from "react";

function Form({ addTask }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    addTask(title, priority);

    setTitle("");
    setPriority("Low");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button type="submit">
        Add Task
      </button>
    </form>
  );
}

export default Form;