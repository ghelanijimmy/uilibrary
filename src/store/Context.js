import React, { useReducer } from "react";
export const LibraryContext = React.createContext({ theme: "light" });

/**
 * Reducer Function
 * @param state {Object}
 * @param action {{type: string, any}}
 * @return {Object}
 * @category Context
 */
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default: {
      return state;
    }
  }
};

/**
 * Store Provider
 * @param children {Object|any}
 * @return {JSX.Element}
 * @category Context
 */
const LibraryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { theme: "light" });

  return (
    <LibraryContext.Provider value={{ state, dispatch }}>
      {children}
    </LibraryContext.Provider>
  );
};

export default LibraryProvider;
