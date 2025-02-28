import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CourseProvider } from "./context/CourseContext.jsx";
//import { BlogProvider } from "./context/BlogContex.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    <CourseProvider>
      <App/>
    </CourseProvider>
    
  </StrictMode>
);
