import { createContext, useReducer } from "react";
import AlertReducer from "./AlertReducer";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialState = null;
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlert = (msg, type) => {
    dispatch({
      type: "SET_ALERT",
      payload: { msg, type },
    });
  };

  const dismissAlert = () => {
    dispatch({ type: "DISMISS_ALERT" });
  };

  return (
    <AlertContext.Provider value={{ alert: state, setAlert, dismissAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
