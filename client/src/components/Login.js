import React, { useState } from 'react';
import './../css/Login.css';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Login Credentials:', credentials);
    alert('Login successful!');
  };

  return (
    <div className="login-container">
      <h2>Log In</h2>
      <form onSubmit={handleFormSubmit} className="login-form">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
