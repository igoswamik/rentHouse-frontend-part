import { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import Toast from "./Components/Toast";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isLoggedin, setState] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      Toast.info("You need to be logged in first");
      setState(false);
    }
  }, []);

  if (isLoggedin) {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  } else {
    return <Redirect to="/login" />;
  }
};

export default PrivateRoute;
