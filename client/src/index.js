import React from "react"; // Importing the React library
import ReactDOM from "react-dom/client"; // Importing the ReactDOM library for rendering the app
import "./index.css"; // Importing the index.css file for global styling
import App from "./App"; // Importing the App component
import reportWebVitals from "./reportWebVitals"; // Importing the reportWebVitals function for performance measuring
import { BrowserRouter } from "react-router-dom"; // Importing BrowserRouter for routing
import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap CSS for styling

const root = ReactDOM.createRoot(document.getElementById("root")); // Creating a root element to render the React app
root.render(
  <BrowserRouter> {/* Wrapping the app with BrowserRouter for enabling routing */}
    <React.StrictMode> {/* Wrapping the app with StrictMode for highlighting potential problems */}
      <App /> {/* Rendering the App component */}
    </React.StrictMode>
  </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
