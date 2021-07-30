import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import history from "./history";
import "./App.css";
import Header from "./Components/Header";
import Home from "./views/Home";
import Footer from "./Components/Footer";
import CityListPage from "./views/CityData/CityListPage";
import Profile from "./views/Components/Profile";
import PostDetailsPage from "./views/PostDetails/PostDetailsPage";
import CreatePost from "./views/Components/ProfileComponents/CreatePost";
import EditPost from "./views/Components/ProfileComponents/EditPost";
import LoginPage from "./views/Components/LoginRegister/LoginPage";
import RegisterPage from "./views/Components/LoginRegister/RegisterPage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    // <Provider store={store}>
    <Router history={history}>
      <div className="App">
        <ToastContainer />
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/profile">
            <Header />
            <Profile />
            <Footer />
          </Route>
          <Route path="/createpost">
            <Header />
            <CreatePost />
            <Footer />
          </Route>
          <Route path="/citydata/:city">
            <Header />
            <CityListPage />
            <Footer />
          </Route>
          <Route path="/post/:id/edit">
            <Header />
            <EditPost />
            <Footer />
          </Route>
          <Route path="/post/:id">
            <Header />
            <PostDetailsPage />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
    // </Provider>
  );
}

export default App;
