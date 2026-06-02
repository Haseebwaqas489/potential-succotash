import { useState } from "react";
import Form from "./Form";
import TaskList from "./TaskList";
import FilterButtons from "./FilterButtons";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn React",
      priority: "High",
      completed: false,
    },
  ]);

  const [filter, setFilter] = useState("all");

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

  const filteredTasks = tasks.filter((task) => {
    if (filter === "pending") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <>
      <h1>Task Manager</h1>

      <Form addTask={addTask} />

      <FilterButtons setFilter={setFilter} />

      <TaskList
        tasks={filteredTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </>
  );
}

export default App;