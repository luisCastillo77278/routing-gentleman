import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthGuard, RolGuard } from "./guards";
import { PrivateRoute, PublicRoute, Roles } from "./models";
import { RouteWithNotFound } from "./utilities";
import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { store } from "./redux";
import { Logout } from "./components";
import "./App.css";

const Login = lazy(() => import("./pages/Login/Login"));
const Private = lazy(() => import("./pages/Private/Private"));
const Dashboard = lazy(() => import("./pages/Private/Dashboard/Dashboard"));

function App() {
  return (
    <Suspense fallback={<h1>Loading....</h1>}>
      <Provider store={store}>
        <BrowserRouter>
          <Logout />
          <RouteWithNotFound>
            <Route
              path="/"
              element={<Navigate to={`/${PrivateRoute.PRIVATE}`} replace />}
            />
            <Route element={<AuthGuard privateValidation={true} />}>
              <Route
                path={`/${PrivateRoute.PRIVATE}/*`}
                element={<Private />}
              />
            </Route>

            <Route element={<RolGuard rol={Roles.ADMIN} />}>
              <Route path={PrivateRoute.DASHBOARD} element={<Dashboard />} />
            </Route>

            <Route path={`/${PublicRoute.LOGIN}`} element={<Login />} />
          </RouteWithNotFound>
        </BrowserRouter>
      </Provider>
    </Suspense>
  );
}

export default App;
