import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PrivateRoute } from "../../models";
import { createUser } from "../../redux/state/slice";
import { getMorty } from "../../services";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogged = async () => {
    const user = await getMorty();
    dispatch(createUser(user));
    navigate(`/${PrivateRoute.PRIVATE}`, { replace: true });
  };

  return (
    <>
      <div>HOLA ESTE ES EL LOGIN</div>
      <button onClick={handleLogged}>login</button>
    </>
  );
};

export default Login;
