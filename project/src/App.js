import React, { useState, Suspense } from 'react';
import './App.css';

const LoginForm = React.lazy(() => import('./components/LoginForm'));

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  return (
    <div className="App">
      {!showLogin ? (
        <div className="login-screen">
          <button onClick={handleLoginClick} className="login-btn">
            Login
          </button>
        </div>
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <LoginForm />
        </Suspense>
      )}
    </div>
  );
}

export default App;
