function FilterButtons({
  filter,
  setFilter,
}) {

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      margin: "25px 0",
      flexWrap: "wrap",
    },

    button: (isActive) => ({
      padding: "12px 24px",
      border: "none",
      borderRadius: "8px",
      backgroundColor: isActive ? "#007bff" : "#ffffff",
      color: isActive ? "#ffffff" : "#333333",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
      transition: "all 0.3s ease",
    }),
  };

  return (
    <div style={styles.container}>

      <button
        style={styles.button(filter === "all")}
        onClick={() => setFilter("all")}
      >
        All
      </button>

      <button
        style={styles.button(filter === "pending")}
        onClick={() => setFilter("pending")}
      >
        Pending
      </button>

      <button
        style={styles.button(filter === "completed")}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>

    </div>
  );
}

export default FilterButtons;