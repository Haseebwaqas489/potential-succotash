import { useState } from "react";

function Form({ addTask }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Please enter a task!");
      return;
    }

    addTask(title, priority);

    setTitle("");
    setPriority("Low");
  };

  
  const styles = {
    form: {
      display: "flex",
      gap: "15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      backgroundColor: "#ffffff",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      marginBottom: "20px",
    },

    input: {
      padding: "12px",
      width: "250px",
      border: "2px solid #ddd",
      borderRadius: "8px",
      fontSize: "16px",
      outline: "none",
    },

    select: {
      padding: "12px",
      border: "2px solid #ddd",
      borderRadius: "8px",
      fontSize: "16px",
      cursor: "pointer",
    },

    button: {
      padding: "12px 20px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: "8px",
      fontSize: "16px",
      cursor: "pointer",
      fontWeight: "bold",
    },
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <input
        style={styles.input}
        type="text"
        placeholder="Enter Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        style={styles.select}
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button style={styles.button} type="submit">
        Add Task
      </button>
    </form>
  );
}

export default Form;