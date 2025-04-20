import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { MessageContext } from "./MessageContext";

export const AdminContext = createContext();
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const AdminProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const {
    userDetails: { authtoken },
    isLogin,
  } = useContext(UserContext);

  const { setErrorMsg } = useContext(MessageContext);
  const fetchAllUsers = async () => {
    try {
      const { data } = await axios.get(SERVER_URL + "/api/users", {
        headers: { authtoken },
      });
      console.log(data);
      setUsers(data.users);
    } catch (error) {
      setErrorMsg("Something Went Wrong While Fetching users");
      console.error(error);
    }
  };
  useEffect(() => {
    if (isLogin) {
      fetchAllUsers();
    }
  }, [isLogin]);
  return (
    <AdminContext.Provider value={{ users }}>{children}</AdminContext.Provider>
  );
};
