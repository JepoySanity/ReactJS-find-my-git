import { createContext, useReducer } from "react";
import GitHubReducer from "./GitHubReducer";

const GitHubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const GitHubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(GitHubReducer, initialState);

  const searchUsers = async (search) => {
    const params = new URLSearchParams({
      q: search,
    });
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`);
    const { items } = await response.json();

    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  const getUserInfo = async (login) => {
    const response = await fetch(`${GITHUB_URL}/users/${login}`);
    const data = await response.json();

    dispatch({
      type: "GET_USER",
      payload: data,
    });
  };

  const clearUsers = () => {
    dispatch({ type: "CLEAR_USERS" });
  };

  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };

  const clearUserInfo = () => {
    dispatch({ type: "CLEAR_USER_INFO" });
  };

  return (
    <GitHubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        searchUsers,
        clearUsers,
        setLoading,
        getUserInfo,
        clearUserInfo,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};

export default GitHubContext;
