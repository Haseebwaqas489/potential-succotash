function TaskItem({
  task,
  toggleTask,
  deleteTask,
}) {

  const styles = {

    card: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: task.completed
        ? "#d4edda"
        : "#ffffff",

      borderLeft:
        task.priority === "High"
          ? "8px solid red"
          : task.priority === "Medium"
          ? "8px solid orange"
          : "8px solid green",

      borderRadius: "12px",

      padding: "18px",

      marginBottom: "18px",

      boxShadow: "0 4px 10px rgba(0,0,0,0.15)",

      opacity: task.completed ? 0.7 : 1,
    },

    left: {
      flex: 1,
    },

    title: {
      margin: 0,
      fontSize: "22px",

      textDecoration:
        task.completed
          ? "line-through"
          : "none",

      color: "#333",
    },

    text: {
      marginTop: "8px",
      fontSize: "16px",
      color: "#555",
    },

    priority: {

      color:
        task.priority === "High"
          ? "red"
          : task.priority === "Medium"
          ? "orange"
          : "green",

      fontWeight: "bold",
    },

    status: {
      color: task.completed ? "green" : "red",
      fontWeight: "bold",
    },

    buttons: {
      display: "flex",
      gap: "10px",
    },

    completeBtn: {
      backgroundColor: task.completed
        ? "#ff9800"
        : "#4CAF50",

      color: "white",

      border: "none",

      padding: "10px 18px",

      borderRadius: "8px",

      cursor: "pointer",

      fontWeight: "bold",
    },

    deleteBtn: {

      backgroundColor: "#f44336",

      color: "white",

      border: "none",

      padding: "10px 18px",

      borderRadius: "8px",

      cursor: "pointer",

      fontWeight: "bold",
    },
  };

  return (

    <div style={styles.card}>

      <div style={styles.left}>

        <h2 style={styles.title}>
          {task.title}
        </h2>

        <p style={styles.text}>
          Priority :
          <span style={styles.priority}>
            {" "}
            {task.priority}
          </span>
        </p>

        <p style={styles.text}>
          Status :
          <span style={styles.status}>
            {task.completed
              ? " Completed"
              : " Pending"}
          </span>
        </p>

      </div>

      <div style={styles.buttons}>

        <button
          style={styles.completeBtn}
          onClick={() =>
            toggleTask(task.id)
          }
        >
          {task.completed
            ? "Undo"
            : "Complete"}
        </button>

        <button
          style={styles.deleteBtn}
          onClick={() =>
            deleteTask(task.id)
          }
        >
          Delete
        </button>

      </div>

    </div>

  );
}

export default TaskItem;
