import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "../models";
import { AppStore } from "../redux/store";

interface Props {
  privateValidation: boolean;
}

const AuthGuard: FunctionComponent<Props> = ({ privateValidation }) => {
  const userState = useSelector((store: AppStore) => store.user);

  return userState.name ? (
    privateValidation ? (
      <Outlet />
    ) : (
      <Navigate replace to={PrivateRoute.PRIVATE} />
    )
  ) : (
    <Navigate replace to={PublicRoute.LOGIN} />
  );
};

export default AuthGuard;
