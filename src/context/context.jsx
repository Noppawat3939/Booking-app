import React, { createContext, useContext, useState, useEffect } from "react";

export const AppContext = createContext();

const getUserLocalStorage = () => {
  let userlist = localStorage.getItem("userLogin");
  return userlist ? JSON.parse(localStorage.getItem("userLogin")) : null;
};

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(getUserLocalStorage());

  const removeUserLocalStorage = () => {
    localStorage.removeItem("userLogin");
  };

  useEffect(() => {
    localStorage.setItem("userLogin", JSON.stringify(user));
  }, [user]);

  return (
    <AppContext.Provider value={{ user, setUser, removeUserLocalStorage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
