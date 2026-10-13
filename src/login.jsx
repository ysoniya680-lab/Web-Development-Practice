
import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleLogin() {
    if (username === "" || password === "") {
      alert("Please enter username and password");
      return;
    }

    navigate("/dashboard", {
      state: {
        username: username
      }
    });
  }

  return (
    <div className="login">

      <h1>Login Page</h1>

      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>
        Login
      </button>

    </div>
  );
}

export default Login;