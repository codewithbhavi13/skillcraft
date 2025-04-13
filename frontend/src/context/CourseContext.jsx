import axios from "axios";
import { createContext, useEffect, useState } from "react";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;
export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [tutorials, setTutorials] = useState([]);
  useEffect(() => {
    axios
      .get(SERVER_URL + "/api/courses")
      .then((data) => setCourses(data.data.courses));
    axios
      .get(SERVER_URL + "/api/tutorials")
      .then((data) => setTutorials(data.data.tutorials));
  }, []);
  console.log(tutorials);
  return (
    <CourseContext.Provider
      value={{ courses, setCourses, tutorials, setTutorials }}
    >
      {children}
    </CourseContext.Provider>
  );
};
