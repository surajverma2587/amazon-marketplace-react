import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./AppRoutes";
import { NavigationBar } from "./components/NavigationBar";

export const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <AppRoutes />
    </BrowserRouter>
  );
};
