import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

const Title = () => (
  <h1 id="title" key="h2">
    Food Ordering App
  </h1>
);

const HeaderComponent = () => {
  return (
    <div>
      <Title />
      <h2> functional component</h2>
      <h2>This is a h2 tag</h2>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
