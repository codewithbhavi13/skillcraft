import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { MessageContext } from "./MessageContext";

export const UserContext = createContext();
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const { setErrorMsg, setSuccessMsg } = useContext(MessageContext);
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
    authtoken: "",
    enrolledTutorials: [],
    selectedCareer: "",
  });
  const [isCareerChanged, setCareerChanged] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const setSingleField = ({ name, value }) => {
    setUserDetails((prev) => ({ ...prev, [name]: value }));
    console.log(name);
    if (name === "selectedCareer") {
      axios.put(
        SERVER_URL + "/api/user-preferences/select-career/",
        {
          selectedCareer: value,
        },
        {
          headers: {
            authtoken: userDetails.authtoken,
          },
        }
      );
    }
  };

  const signUpUser = async () => {
    try {
      const { data } = await axios.post(SERVER_URL + "/api/auth/signup", {
        username: userDetails.username,
        email: userDetails.email,
        password: userDetails.password,
      });
      setIsLogin(true);
      setUserDetails(data.user);
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
      setUserDetails(data.user);
      Cookies.set("authtoken", data.user.authtoken);
      console.log(data);
      setSuccessMsg(data.msg);
      navigate("/");
      return data.msg;
    } catch (error) {
      console.log("Error", error);
      setErrorMsg(error.response.data.msg);
      return error.response.data.msg;
    }
  };

  const getUser = async () => {
    const authtoken = Cookies.get("authtoken");
    if (!authtoken) {
      return;
    }
    try {
      const response = await axios.get(SERVER_URL + "/api/auth/", {
        headers: { authtoken },
      });
      setUserDetails({ ...response.data.user, authtoken });
      setIsLogin(true);
      setSuccessMsg(response.data.msg);
    } catch (error) {
      console.log(error);
      setErrorMsg("Login Failed");
    }
  };

  const getEnrolledTutorial = async ({ title, noOfChapters }) => {
    let newEnrolledTutorials = userDetails.enrolledTutorials;
    try {
      const response = await axios.patch(
        SERVER_URL + "/api/progress/enroll-tutorial",
        {
          title,
          noOfChapters,
        },
        {
          headers: { authtoken: userDetails.authtoken },
        }
      );
      newEnrolledTutorials.push(response.data.enrolledTutorial);
      setSingleField({
        name: "enrolledTutorials",
        value: newEnrolledTutorials,
      });
      return response.data.enrolledTutorial;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const startChapter = async ({ tutorialName, chapterName }) => {
    try {
      const response = await axios.patch(
        SERVER_URL + "/api/progress/start-chapter",
        {
          tutorialName,
          chapterName,
        },
        {
          headers: { authtoken: userDetails.authtoken },
        }
      );
      updateTutorialInContext(response.data.updatedTutorial, tutorialName);
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const saveQuizResult = async (tutorialName, result) => {
    try {
      const response = await axios.patch(
        SERVER_URL + "/api/progress/save-quiz-score",
        {
          tutorialName,
          result,
        },
        { headers: { authtoken: userDetails.authtoken } }
      );

      updateTutorialInContext(response.data.updatedTutorial, tutorialName);
    } catch (error) {
      console.log(error);
    }
  };

  const completeTopic = async ({ tutorialName, chapterName, topicName }) => {
    try {
      const response = await axios.patch(
        SERVER_URL + "/api/progress/complete-topic",
        {
          tutorialName,
          chapterName,
          topicName,
        },
        {
          headers: { authtoken: userDetails.authtoken },
        }
      );
      updateTutorialInContext(response.data.updatedTutorial, tutorialName);
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const updateTutorialInContext = (updatedTutorial, tutorialName) => {
    let newEnrolledTutorials = userDetails.enrolledTutorials.filter(
      (item) => item.title !== tutorialName
    );
    newEnrolledTutorials.push(updatedTutorial);
    console.log(newEnrolledTutorials);
    setSingleField({
      name: "enrolledTutorials",
      value: newEnrolledTutorials,
    });
  };
  const cleanUp = () => {
    setUserDetails({
      username: "",
      email: "",
      password: "",
      authtoken: "",
      enrolledTutorials: [],
    });
    setIsLogin(false);
  };

  useEffect(() => {
    getUser();
    return cleanUp;
  }, []);

  return (
    <UserContext.Provider
      value={{
        userDetails,
        isLogin,
        setSingleField,
        signUpUser,
        loginUser,
        enrolledTutorials: userDetails.enrolledTutorials,
        getEnrolledTutorial,
        isCareerChanged,
        setCareerChanged,
        startChapter,
        completeTopic,
        saveQuizResult,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
