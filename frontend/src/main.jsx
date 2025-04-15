import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CourseProvider } from "./context/CourseContext.jsx";

import { UserProvider } from "./context/UserContext.jsx";
import { BrowserRouter, Routes } from "react-router-dom";
import { MessageProvider } from "./context/MessageContext.jsx";
import { BlogProvider } from "./context/BlogContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MessageProvider>
        <CourseProvider>
          <UserProvider>
            <BlogProvider>
              <App />
            </BlogProvider>
          </UserProvider>
        </CourseProvider>
      </MessageProvider>
    </BrowserRouter>
  </StrictMode>
);
