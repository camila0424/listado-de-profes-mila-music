import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import { HashRouter } from "react-router";

/* import { HashRouter } from "react-router-dom"; */

createRoot(document.getElementById("root")).render(
  <StrictMode basename="./">
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);

/* const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
); */
