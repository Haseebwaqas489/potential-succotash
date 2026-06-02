function TaskList({
  tasks,
  toggleTask,
  deleteTask,
}) {
  return (
    <div>
      {tasks.map((task) => (
        <div
          key={task.id}
          style={{
            margin: "10px",
            padding: "10px",
            border: "1px solid black",
          }}
        >
          <h3
            style={{
              textDecoration: task.completed
                ? "line-through"
                : "none",
            }}
          >
            {task.title}
          </h3>

          <p>Priority: {task.priority}</p>

          <p>
            Status:{" "}
            {task.completed
              ? "Completed"
              : "Pending"}
          </p>

          <button
            onClick={() =>
              toggleTask(task.id)
            }
          >
            {task.completed
              ? "Undo"
              : "Complete"}
          </button>

          <button
            onClick={() =>
              deleteTask(task.id)
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
