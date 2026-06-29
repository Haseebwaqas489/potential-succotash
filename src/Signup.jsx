import { useState } from "react";

function Signup({ setCurrentPage }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const user = {
      name,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Account Created Successfully!");

    setCurrentPage("login");
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      background: "linear-gradient(135deg,#74ebd5,#9face6)",
      fontFamily: "Arial, sans-serif",
    },

    card: {
      width: "400px",
      background: "#fff",
      borderRadius: "20px",
      padding: "35px",
      boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
    },

    heading: {
      textAlign: "center",
      marginBottom: "10px",
      color: "#333",
      fontSize: "32px",
    },

    subHeading: {
      textAlign: "center",
      color: "#666",
      marginBottom: "25px",
      fontSize: "15px",
    },

    input: {
      width: "100%",
      padding: "14px",
      marginBottom: "18px",
      border: "2px solid #ddd",
      borderRadius: "10px",
      fontSize: "16px",
      outline: "none",
      boxSizing: "border-box",
    },

    button: {
      width: "100%",
      padding: "14px",
      background: "#28a745",
      color: "#fff",
      border: "none",
      borderRadius: "10px",
      fontSize: "17px",
      fontWeight: "bold",
      cursor: "pointer",
    },

    text: {
      textAlign: "center",
      marginTop: "20px",
      color: "#555",
    },

    link: {
      color: "#007bff",
      cursor: "pointer",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <form style={styles.card} onSubmit={handleSignup}>

        <h1 style={styles.heading}>📝 Sign Up</h1>

        <p style={styles.subHeading}>
          Create your account to get started.
        </p>

        <input
          style={styles.input}
          type="text"
          placeholder="Enter Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          style={styles.input}
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button
          style={styles.button}
          type="submit"
        >
          Sign Up
        </button>

        <p style={styles.text}>
          Already have an account?{" "}
          <span
            style={styles.link}
            onClick={() => setCurrentPage("login")}
          >
            Login
          </span>
        </p>

      </form>
    </div>
  );
}

export default Signup;