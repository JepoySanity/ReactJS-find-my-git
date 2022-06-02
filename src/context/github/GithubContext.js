import { createContext, useState } from "react";

const GitHubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const GitHubProvider = ({ children }) => {
  const [users, setusers] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const getUsers = async () => {
    const response = await fetch(`${GITHUB_URL}/users`);
    const data = await response.json();
    setusers(data);
    setisLoading(false);
  };

  return (
    <GitHubContext.Provider value={{ users, isLoading, getUsers }}>
      {children}
    </GitHubContext.Provider>
  );
};

export default GitHubContext;
