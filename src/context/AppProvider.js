import { createContext, useContext, useState } from "react";

import { getDataFromLocalStorage } from "../utils/getDataFromLocalStorage";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [basket, setBasket] = useState(getDataFromLocalStorage("basket", []));

  return (
    <AppContext.Provider value={{ basket, setBasket }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
