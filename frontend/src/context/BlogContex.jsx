import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { data } from "react-router-dom";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  const addBlog = async (newBlog) => {
    const { title, image, content } = newBlog;
    const jsonData = {
      title,
      content,
    };
    const formData = new FormData();
    formData.append("jsonData", JSON.stringify(jsonData));
    formData.append("image", image);
    let responseData;
    try {
      const response = await axios.post(
        "http://localhost:5000/api/blog",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      responseData = response.data;
    } catch (error) {
      console.error("Error uploading:", error);
    }
    setBlogs([
      ...blogs,
      {
        id: responseData._id,
        title: responseData.title,
        content: responseData.content,
        image: responseData.image,
        comments: responseData.comments,
      },
    ]);
  };
  console.log(blogs);
  // useEffect(() => {
  //   const getBlogs = async () => {
  //     return await axios.get("http://localhost:5000/api/blog");
  //   };

  //   getBlogs().then((data) => {
  //     let alteredBlogs = data.data.map((blog) => {
  //       blog.id = blog._id;
  //       return blog;
  //     });
  //     setBlogs(alteredBlogs);
  //   });
  // }, []);
  return (
    <BlogContext.Provider value={{ blogs, addBlog }}>
      {children}
    </BlogContext.Provider>
  );
};
