import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  return (
    <AppContext.Provider value={{ basket, setBasket }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
