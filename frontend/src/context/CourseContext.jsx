import axios from "axios";
import { createContext, useEffect, useState } from "react";

 export const CourseContext = createContext()

 export const CourseProvider = ({children}) => {
  
  const [courses, setCourses] = useState([])
  useEffect(() => {
    axios.get("http://localhost:5000/api/courses").then((data) =>setCourses(data.data.courses) )

  },[])
  return (
    <CourseContext.Provider value={{courses, setCourses}}>
      {children}
    </CourseContext.Provider>
  )
 } 