
import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  toggleTask,
  deleteTask,
}) {

  const styles = {
    container: {
      marginTop: "25px",
    },

    empty: {
      textAlign: "center",
      color: "#777",
      fontSize: "22px",
      marginTop: "40px",
      fontWeight: "bold",
    },
  };

  if (tasks.length === 0) {
    return (
      <h2 style={styles.empty}>
        No Tasks Available
      </h2>
    );
  }

  return (
    <div style={styles.container}>

      {tasks.map((task) => (

        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
           deleteTask={deleteTask}
        />

      ))}

    </div>
  );
}

export default TaskList;
