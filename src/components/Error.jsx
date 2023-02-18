import React from "react";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();

  function handleClick(e) {
    navigate("/");
  }

  return (
    <div>
      <h3>404 NOT FOUND</h3>
      <button onClick={handleClick}>Home</button>
    </div>
  );
}
