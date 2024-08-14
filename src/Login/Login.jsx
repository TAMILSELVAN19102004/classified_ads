import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address!");
      return;
    }

  
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long!");
      return;
    }
    try {
      const users = await axios.get("http://localhost:5000/data/user");
      console.log(users.data);
      
      alert("Login successful!");
      navigate("/home"); 
    } catch (error) {
      setError("Login failed. Please try again later.");
      console.error("Error:", error);
    }
  };

  const handleSignUpClick = () => {
    navigate("/signup"); 
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h1 style={styles.header}>SIGN IN</h1>
        {error && <p style={styles.error}>{error}</p>}
        <label style={styles.label}>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <label style={styles.label}>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          {" "}
          
          <button type="submit" style={styles.button}>
            SIGN IN
          </button>
        </div>
        <div style={styles.linksContainer}>
          <h5 style={styles.text}>
            New?{" "}
            <span style={styles.link} onClick={handleSignUpClick}>
              Create one
            </span>
          </h5>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundImage:
      'url("https://tse3.mm.bing.net/th?id=OIP.Ih7xr4sewu26s6saMH_jYwHaEo&pid=Api&P=0&h=180")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  form: {
    height: "300px",
    width: "300px",
    padding: "50px",
    borderRadius: "10px",
    boxShadow: "4px 5px 10px black",
    background: "#222",
    color: "#FFD700",
    margin: "20px",
  },
  header: {
    textAlign: "center",
    color: "#FFD700",
  },
  label: {
    display: "block",
    marginBottom: "10px",
    color: "#FFD700",
  },
  input: {
    width: "95%",
    marginBottom: "15px",
    padding: "8px",
    background: "transparent",
    borderColor: "#FFD700",
    borderRadius: "10px",
    color: "#FFD700",
  },
  button: {
    width: "50%",
    padding: "10px",
    backgroundColor: "#FFD700",
    color: "#000",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },
  text: {
    color: "#FFD700",
  },
  link: {
    color: "#FFD700",
    cursor: "pointer",
  },
  error: {
    color: "red",
    textAlign: "center",
    marginBottom: "10px",
  },
  linksContainer: {
    textAlign: "center",
    marginTop: "20px", 
  },
};

export default Login;
