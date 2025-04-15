import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { data } from "react-router-dom";
import { UserContext } from "./UserContext";
import { MessageContext } from "./MessageContext";

export const BlogContext = createContext();

const SERVER_URL = import.meta.env.VITE_SERVER_URL;
export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  console.log(blogs);
  const { authtoken, username } = useContext(UserContext).userDetails;
  const { setErrorMsg } = useContext(MessageContext);
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
      const response = await axios.post(SERVER_URL + "/api/blog", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          authtoken: authtoken,
        },
      });

      responseData = response.data;
    } catch (error) {
      console.error("Error uploading:", error);
    }
    setBlogs([
      ...blogs,
      {
        ...responseData,
        id: responseData._id,
      },
    ]);
  };

  const addComment = async (blogid, message) => {
    try {
      const response = await axios.post(
        SERVER_URL + "/api/blog/comment",
        {
          blogid,
          username,
          message,
        },
        {
          headers: { authtoken },
        }
      );
      console.log(response.data);
      updateBlogs({ ...response.data.blog, id: response.data.blog._id });
    } catch (error) {
      console.log(error);
      setErrorMsg("Something Went Wrong");
    }
  };

  const updateBlogs = (updatedBlog) => {
    const otherBlogs = blogs.filter((blog) => blog.id !== updatedBlog.id);
    console.log(updatedBlog);
    setBlogs([...otherBlogs, updatedBlog]);
  };

  const deleteComment = async (blogId, commentId) => {
    try {
      const response = await axios.delete(SERVER_URL + "/api/blog/comment", {
        headers: { authtoken },
        data: {
          blogId,
          commentId,
        },
      });

      console.log(response.data);
      updateBlogs({ ...response.data.blog, id: response.data.blog._id });
    } catch (error) {
      console.log(error);
      setErrorMsg("Something Went Wrong");
    }
  };
  const editComment = async (blogId, commentId, message) => {
    try {
      const response = await axios.put(
        SERVER_URL + "/api/blog/comment",
        {
          blogId,
          commentId,
          message,
        },
        { headers: { authtoken } }
      );
      console.log(response.data);
      updateBlogs({ ...response.data.blog, id: response.data.blog._id });
    } catch (error) {
      console.log(error);
      setErrorMsg("Something Went Wrong");
    }
  };

  const likeUnlikeBlog = async (blogId) => {
    try {
      const response = await axios.post(
        SERVER_URL + "/api/blog/like",
        {
          blogId,
        },
        { headers: { authtoken } }
      );
      console.log(response.data);
      updateBlogs({ ...response.data.blog, id: response.data.blog._id });
    } catch (error) {
      console.log(error);
      setErrorMsg("Something Went Wrong");
    }
  };

  const getBlogs = async () => {
    console.log("My Authtoken:", authtoken.length);
    if (
      authtoken.trim() !== "" &&
      authtoken !== undefined &&
      authtoken.length !== 0
    ) {
      const data = await axios.get(SERVER_URL + "/api/blog", {
        headers: { authtoken },
      });
      let alteredBlogs = data.data.map((blog) => {
        blog.id = blog._id;
        return blog;
      });
      setBlogs(alteredBlogs);
    }
  };

  const refreshBlogs = () => getBlogs();
  useEffect(() => {
    getBlogs();
  }, [authtoken]);
  return (
    <BlogContext.Provider
      value={{
        blogs,
        addBlog,
        addComment,
        deleteComment,
        editComment,
        likeUnlikeBlog,
        refreshBlogs,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
