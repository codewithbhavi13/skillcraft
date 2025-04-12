import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { MessageContext } from "./MessageContext";

export const UserContext = createContext();
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const { setErrorMsg, setSuccessMsg } = useContext(MessageContext);
  const [userDetails, setLUserDetails] = useState({
    username: "",
    email: "",
    password: "",
    authtoken: "",
    enrolledTutorials: [],
  });
  const [isLogin, setIsLogin] = useState(false);
  const setSingleField = ({ name, value }) => {
    setLUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const signUpUser = async () => {
    try {
      const { data } = await axios.post(SERVER_URL + "/api/auth/signup", {
        username: userDetails.username,
        email: userDetails.email,
        password: userDetails.password,
      });
      setIsLogin(true);
      setLUserDetails(data.user);
      Cookies.set("authtoken", data.user.authtoken);
      navigate("/");
      setSuccessMsg(data.msg);
      return data.msg;
    } catch (error) {
      console.log("Error", error.response.data);
      setErrorMsg(error.response.data.msg);

      return error.response.data.msg;
    }
  };
  const loginUser = async () => {
    try {
      const { data } = await axios.post(SERVER_URL + "/api/auth/signin", {
        email: userDetails.email,
        password: userDetails.password,
      });
      setIsLogin(true);
      setLUserDetails(data.user);
      Cookies.set("authtoken", data.user.authtoken);
      console.log(data);
      setSuccessMsg(data.msg);
      navigate("/");
      return data.msg;
    } catch (error) {
      console.log("Error", error.response.data);
      setErrorMsg(error.response.data.msg);
      return error.response.data.msg;
    }
  };

  return (
    <UserContext.Provider
      value={{ userDetails, isLogin, setSingleField, signUpUser, loginUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
