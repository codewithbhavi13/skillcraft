import React, { createContext, useState, useMemo, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Cookies from "js-cookie";

// Create ThemeContext
export const ThemeContext = createContext();

export const ThemeProviderComponent = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Define the theme dynamically based on darkMode
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: {
            main: darkMode ? "#90caf9" : "#1976d2",
          },
          background: {
            default: darkMode ? "#121212" : "#ffffff",
            paper: darkMode ? "#1e1e1e" : "#f5f5f5",
          },
        },
        typography: {
          fontFamily: "Roboto, Arial, sans-serif",
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: "none",
                borderRadius: "8px",
              },
            },
          },
        },
      }),
    [darkMode]
  );
  // useEffect(() => {
  //   const data = Cookies.get("darkMode");

  //   setDarkMode(data);
  // }, []);
  useEffect(() => {
    Cookies.set("darkMode", darkMode, { expires: 30 });
    console.log(darkMode);
  }, [darkMode]);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
