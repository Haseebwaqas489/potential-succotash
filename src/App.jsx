import { useState, useEffect } from "react";

import Form from "./Form";
import TaskList from "./TaskList";
import FilterButtons from "./FilterButtons";
import TaskItem from "./TaskItem";
import Login from "./Login";
import Signup from "./Signup";

function App() {
const [currentPage, setCurrentPage] = useState("login");

const [isLoggedIn, setIsLoggedIn] = useState(
  localStorage.getItem("isLoggedIn") === "true"
);
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title, priority) => {

    const newTask = {
      id: Date.now(),
      title,
      priority,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {

    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {

    setTasks(
      tasks.filter((task) => task.id !== id)
    );
  };

  const clearCompleted = () => {

    setTasks(
      tasks.filter((task) => !task.completed)
    );

  };

  const filteredTasks = tasks.filter((task) => {

    if (filter === "pending") return !task.completed;

    if (filter === "completed") return task.completed;

    return true;

  });

  const total = tasks.length;
  const completed = tasks.filter(task => task.completed).length;
  const pending = total - completed;

  const styles = {

    page: {
      minHeight: "100vh",
      background: "linear-gradient(135deg,#74ebd5,#9face6)",
      padding: "40px",
      fontFamily: "Arial, sans-serif",
    },

    container: {
      maxWidth: "900px",
      margin: "auto",
      background: "#fff",
      borderRadius: "15px",
      padding: "30px",
      boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
    },

    heading: {
      textAlign: "center",
      color: "#333",
      marginBottom: "25px",
    },

    stats: {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "20px",
      marginBottom: "25px",
      flexWrap: "wrap",
      gap: "15px",
    },

    card: {
      background: "#f8f9fa",
      padding: "15px 25px",
      borderRadius: "10px",
      boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
      fontWeight: "bold",
      minWidth: "150px",
      textAlign: "center",
    },

    clearBtn: {
      display: "block",
      margin: "25px auto",
      padding: "12px 25px",
      backgroundColor: "#dc3545",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "bold",
    }

  };
if (!isLoggedIn) {

  if (currentPage === "signup") {
    return (
      <Signup
        setCurrentPage={setCurrentPage}
      />
    );
  }

  return (
    <Login
      setCurrentPage={setCurrentPage}
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}
  return (

    <div style={styles.page}>

      <div style={styles.container}>

        <h1 style={styles.heading}>
          📝 Interactive Task Manager
        </h1>

        <Form addTask={addTask} />

        <FilterButtons
          filter={filter}
          setFilter={setFilter}
        />

        <div style={styles.stats}>

          <div style={styles.card}>
            Total <br />
            {total}
          </div>

          <div style={styles.card}>
            Completed <br />
            {completed}
          </div>

          <div style={styles.card}>
            Pending <br />
            {pending}
          </div>

        </div>

        {completed > 0 && (

          <button
            style={styles.clearBtn}
            onClick={clearCompleted}
          >
            Clear Completed Tasks
          </button>

        )}

        <TaskList
          tasks={filteredTasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />

      </div>

    </div>

  );
}

export default App;