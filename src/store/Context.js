import React, { useReducer } from "react";
export const LibraryContext = React.createContext({ theme: "light" });

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

const LibraryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { theme: "light" });

  return (
    <LibraryContext.Provider value={{ state, dispatch }}>
      {children}
    </LibraryContext.Provider>
  );
};

export default LibraryProvider;
