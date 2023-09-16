import { Fragment } from "react";
import Counter from "./Components/Counter";
import Header from "./Components/Header";
import Auth from "./Components/Auth";
import { useSelector } from "react-redux";
import UserProfile from "./Components/UserProfile";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Fragment>
      <Header />
      {!isAuth ? (<Auth />) : (<UserProfile />)}
      <Counter />
    </Fragment>
  );
}

export default App;
