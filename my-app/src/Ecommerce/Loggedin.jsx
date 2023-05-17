import React from "react";
import { useNavigate } from "react-router-dom";

const Loggedin = () => {
  const nav = useNavigate();
  const handleLogout = () => {
    if (localStorage) {
      localStorage.removeItem("user-info");
      nav("/LoginPage");
    }
    window.location.reload(true);
  };
  return (
    <div>
      <div>
        <p>Logined </p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Loggedin;
