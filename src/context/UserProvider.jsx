import React, { useState, createContext } from "react";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [person, setPerson] = useState({});
  console.log(person);

  return (
    <UserContext.Provider value={{ person, setPerson }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
