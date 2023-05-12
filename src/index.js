import React from "react";
import ReactDOM from "react-dom";
import './index.css';
// ReactDOM.render(<Game />, document.getElementById('root'));
window.addEventListener("DOMContentLoaded", function (e) {
  // const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <Game />
    </React.StrictMode>
  );
});