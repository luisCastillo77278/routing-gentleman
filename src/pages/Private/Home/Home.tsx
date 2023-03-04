import { useSelector } from "react-redux";
import { AppStore } from "../../../redux/store";

const Home = () => {
  const user = useSelector((store: AppStore) => store.user);
  return <h1>Hola mundo desde home {user.name}</h1>;
};

export default Home;
