import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import Auth from "../Routes/Auth";
import Feed from "../Routes/Feed";
import EditProfile from "../Routes/EditProfile";
import Profile from "../Routes/Profile";
import ImageDetail from "../Routes/ImageDetail";
import Search from "../Routes/Search";
import Explore from "../Routes/Explore";
import Header from "./Header";

const Wrapper = styled.div`
  padding-top: 135px;
`;

const LoggedInPages = () => (
  <Wrapper>
    <Header />
    <Switch>
      <Route path="/" exact component={Feed} />
      <Route path="/p/:id" component={ImageDetail} />
      <Route path="/edit-profile" component={EditProfile} />
      <Route path="/search" component={Search} />
      <Route path="/explore" component={Explore} />
      <Route path="/:username" component={Profile} />
    </Switch>
  </Wrapper>
);

const LoggedOutPages = () => (
  <Switch>
    <Route path="/" exact component={Auth} />
  </Switch>
);

const AppRouter = ({ isLoggedIn }) => (
  <Router>{isLoggedIn ? <LoggedInPages /> : <LoggedOutPages />}</Router>
);

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;
