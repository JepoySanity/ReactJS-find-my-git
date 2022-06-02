import { createContext, useReducer } from "react";
import GitHubReducer from "./GitHubReducer";

const GitHubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const GitHubProvider = ({ children }) => {
  const initialState = {
    users: [],
    isLoading: true,
  };

  const [state, dispatch] = useReducer(GitHubReducer, initialState);

  const getUsers = async () => {
    const response = await fetch(`${GITHUB_URL}/users`);
    const data = await response.json();

    dispatch({
      type: "GET_USERS",
      payload: data,
    });
  };

  return (
    <GitHubContext.Provider
      value={{ users: state.users, isLoading: state.isLoading, getUsers }}
    >
      {children}
    </GitHubContext.Provider>
  );
};

export default GitHubContext;
