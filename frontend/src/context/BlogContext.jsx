import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { MessageContext } from "./MessageContext";

export const BlogContext = createContext();

const SERVER_URL = import.meta.env.VITE_SERVER_URL;
export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  const { authtoken, username } = useContext(UserContext).userDetails;
  const { setErrorMsg, setSuccessMsg } = useContext(MessageContext);
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
      setBlogs([
        ...blogs,
        {
          ...responseData,
          id: responseData._id,
        },
      ]);
    } catch (error) {
      console.error("Error uploading:", error);
    }
  };
  const editBlog = async ({ title, image, content, id }) => {
    const jsonData = {
      title,
      content,
      blogId: id,
    };
    const formData = new FormData();
    formData.append("jsonData", JSON.stringify(jsonData));
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await axios.put(SERVER_URL + "/api/blog", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          authtoken: authtoken,
        },
      });
      setSuccessMsg(response.data.msg);
      updateBlogs({ ...response.data.blog, id: response.data.blog._id });
    } catch (error) {
      console.error("Error uploading:", error);
    }
  };

  const deleteBlog = async (id) => {
    try {
      const { data, status } = await axios.delete(SERVER_URL + "/api/blog", {
        data: { blogId: id },
        headers: { authtoken },
      });
      if (status === 200) {
        setBlogs(blogs.filter((blog) => blog.id !== id));
      } else {
        setErrorMsg(data.msg);
      }
    } catch (error) {
      console.log(error);
    }
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
      updateBlogs({ ...response.data.blog, id: response.data.blog._id });
    } catch (error) {
      console.log(error);
      setErrorMsg("Something Went Wrong");
    }
  };

  const updateBlogs = (updatedBlog) => {
    const otherBlogs = blogs.filter((blog) => blog.id !== updatedBlog.id);
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
        editBlog,
        deleteBlog,
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
