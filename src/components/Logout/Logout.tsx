import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PublicRoute } from "../../models";
import { resetUser } from "../../redux/state/slice";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(resetUser());
    navigate(`/${PublicRoute.LOGIN}`, { replace: true });
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
