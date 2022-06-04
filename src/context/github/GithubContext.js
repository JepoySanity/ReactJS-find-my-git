import { createContext, useReducer } from "react";
import GitHubReducer from "./GitHubReducer";

const GitHubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const GitHubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GitHubReducer, initialState);

  const searchUsers = async (search) => {
    const params = new URLSearchParams({
      q: search,
    });
    setLoading();
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`);
    const { items } = await response.json();

    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  const clearUsers = () => {
    dispatch({ type: "CLEAR_USERS" });
  };

  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };

  return (
    <GitHubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers,
        setLoading,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};

export default GitHubContext;
