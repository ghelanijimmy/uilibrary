import React, { useReducer } from "react";
export const LibraryContext = React.createContext({ test: "test" });

const reducer = (state, action) => {
  switch (action.type) {
    default: {
      return { ...state };
    }
  }
};

const LibraryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {}, () => ({}));

  return (
    <LibraryContext.Provider value={{ state, dispatch }}>
      {children}
    </LibraryContext.Provider>
  );
};

export default LibraryProvider;
