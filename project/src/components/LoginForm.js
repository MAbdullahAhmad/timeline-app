import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';

import './LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isFirstTime, setIsFirstTime] = useState(true);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    if (storedUsername && storedPassword) {
      setUsername(storedUsername);
      setPassword(storedPassword);
      setIsFirstTime(false);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedPassword = localStorage.getItem('password');
    if (storedPassword === password) {
      window.location.href = '/panel';  // Redirect to the panel
    } else {
      swal("Error", "Incorrect password", "error");
    }
  };

  const handleSaveCredentials = () => {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    setIsFirstTime(false);
  };

  return (
    <div className="login-form">
      {isFirstTime ? (
        <div>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Enter Username" 
          />
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter Password" 
          />
          <button onClick={handleSaveCredentials}>Save Credentials</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Username" 
            disabled
          />
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Password" 
          />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
