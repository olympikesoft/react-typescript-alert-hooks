import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const showAlert = () => {
    alert("Do you need help?");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      showAlert();
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [showAlert]);

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("login");
    alert("Login submitted: " + formData.email + ", " + formData.password);
  };

  return (
    <div className="App">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="layout">
          <div className="inputLayout">
            <input
              color="secondary"
              id="email"
              type="email"
              autoComplete="off"
              value={formData.email}
              autoFocus
              className="inputGroup"
              onChange={handleChange}
              placeholder="email"
            />
          </div>
          <div className="inputLayout">
            <input
              id="password"
              type="password"
              autoComplete="off"
              className="inputGroup"
              value={formData.password}
              autoFocus
              onChange={handleChange}
              placeholder="password"
            />
          </div>
          <div></div>
          <div>
            <button type="submit">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
}
