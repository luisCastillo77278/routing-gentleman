import { lazy } from "react";
import { Navigate, Route } from "react-router-dom";
import { RolGuard } from "../../guards";
import { PrivateRoute, Roles } from "../../models";
import { RouteWithNotFound } from "../../utilities";

const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
const Home = lazy(() => import("./Home/Home"));

const Private = () => {
  return (
    <RouteWithNotFound>
      <Route
        path="/"
        element={<Navigate to={PrivateRoute.DASHBOARD} replace />}
      />

      <Route path={PrivateRoute.DASHBOARD} element={<Dashboard />} />
      <Route path={PrivateRoute.HOME} element={<Home />} />
    </RouteWithNotFound>
  );
};
export default Private;
