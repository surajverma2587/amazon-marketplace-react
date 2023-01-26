import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./AppRoutes";
import { NavigationBar } from "./components/NavigationBar";
import { AppProvider } from "./context/AppProvider";

export const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <NavigationBar />
        <AppRoutes />
      </BrowserRouter>
    </AppProvider>
  );
};
