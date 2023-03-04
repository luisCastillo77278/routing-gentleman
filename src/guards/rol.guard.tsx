import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { PrivateRoute, Roles } from "../models";
import { AppStore } from "../redux/store";

interface Props {
  rol: Roles;
}

const RolGuard: FunctionComponent<Props> = ({ rol }) => {
  const user = useSelector((store: AppStore) => store.user);

  return user.rol === rol ? (
    <Outlet />
  ) : (
    <Navigate to={PrivateRoute.PRIVATE} replace />
  );
};

export default RolGuard;
