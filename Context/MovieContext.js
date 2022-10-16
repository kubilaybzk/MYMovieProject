import React, { useState, useContext } from "react";
const MovieContext = React.createContext();

const MovieProvider = ({ children }) => {
  const [inputvalue, setInputValue] = useState([]); //İnput değerinin global olarak tutulduğu bir state.
  const [lastSearchs, setLastSearch] = useState(); //son arama anahtar kelimelerinin tutulduğu state.

  return (
    <MovieContext.Provider
      value={{
        setInputValue,
        setLastSearch,
        inputvalue,
        lastSearchs,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(MovieContext);
};

export { MovieContext, MovieProvider };
