import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get("access_token");
    if (accessToken) {
      // Store the token in localStorage or state management
      localStorage.setItem("access_token", accessToken);
      // Redirect to the dashboard
      navigate("/dashboard");
    }
  }, [navigate]);

  return <div>Redirecting...</div>;
};

export default Callback;
