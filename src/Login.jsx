import { useState } from "react";

function Login({ setCurrentPage, setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("No account found. Please Sign Up first.");
      return;
    }

    if (
      email === savedUser.email &&
      password === savedUser.password
    ) {
      alert(`Welcome ${savedUser.name}!`);

      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
    } else {
      alert("Invalid Email or Password");
    }
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
      background: "#007bff",
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
      <form style={styles.card} onSubmit={handleLogin}>

        <h1 style={styles.heading}>🔐 Login</h1>

        <p style={styles.subHeading}>
          Welcome Back! Login to continue.
        </p>

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

        <button
          style={styles.button}
          type="submit"
        >
          Login
        </button>

        <p style={styles.text}>
          Don't have an account?{" "}
          <span
            style={styles.link}
            onClick={() => setCurrentPage("signup")}
          >
            Sign Up
          </span>
        </p>

      </form>
    </div>
  );
}

export default Login;