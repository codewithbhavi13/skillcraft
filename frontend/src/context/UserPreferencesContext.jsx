import { createContext, useEffect, useState } from "react";

export const UserPreferencesContext = createContext();

export const UserPreferencesProvider = ({ children }) => {
  const [selectedCareer, setSelectedCareer] = useState("");
  const [isCareerChanged, setCareerChanged] = useState(false);
  useEffect(() => {
    console.log("Selected Career:", selectedCareer);
  }, [selectedCareer]);
  return (
    <UserPreferencesContext.Provider
      value={{
        selectedCareer,
        setSelectedCareer,
        isCareerChanged,
        setCareerChanged,
      }}
    >
      {children}
    </UserPreferencesContext.Provider>
  );
};
