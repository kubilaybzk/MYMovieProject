import React, { useState, useContext } from "react";
const MovieContext = React.createContext();

const MovieProvider = ({ children }) => {
 
    const [ınputvalue,setInputValue]=useState([]);
    const [lastSearchs,setLastSearch]=useState([]);



  return (
    <MovieContext.Provider
      value={{
        setInputValue,
        setLastSearch,
        ınputvalue,
        lastSearchs

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