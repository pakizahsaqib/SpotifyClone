import React from "react";

const Login = () => {
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

  // Redirect the user to the backend login route, which will then redirect to Spotify
  const handleLogin = () => {
    window.location.href = `http://localhost:3000/auth/login`;
  };

  return (
    <div>
      <h1>Spotify Clone</h1>
      <button onClick={handleLogin}>Login with Spotify</button>
    </div>
  );
};

export default Login;
