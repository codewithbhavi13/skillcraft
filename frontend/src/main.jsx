import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CourseProvider } from "./context/CourseContext.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import { UserPreferencesProvider } from "./context/UserPreferencesContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { MessageProvider } from "./context/MessageContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MessageProvider>
        <CourseProvider>
          <UserProvider>
            <UserPreferencesProvider>
              <Provider store={store}>
                <App />
              </Provider>
            </UserPreferencesProvider>
          </UserProvider>
        </CourseProvider>
      </MessageProvider>
    </BrowserRouter>
  </StrictMode>
);
