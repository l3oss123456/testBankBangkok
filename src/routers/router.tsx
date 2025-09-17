import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getListRoute } from "./funcs/routes.func";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          // element={<PublicGuardRoute />}
        >
          {getListRoute("publicRoute")}
        </Route>

        <Route
          path="/"
          // element={<PrivateGuardRoute />}
        >
          {getListRoute("privateRoute")}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
