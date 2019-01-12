import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "../Routes/Auth";
import Feed from "../Routes/Feed";
import EditProfile from "../Routes/EditProfile";
import Profile from "../Routes/Profile";
import ImageDetail from "../Routes/ImageDetail";
import Search from "../Routes/Search";
import Explore from "../Routes/Explore";

const LoggedInPages = () => (
  <Switch>
    <Route path="/" exact component={Feed} />
    <Route path="/p/:id" component={ImageDetail} />
    <Route path="/edit-profile" component={EditProfile} />
    <Route path="/search" component={Search} />
    <Route path="/explore" component={Explore} />
    <Route path="/:username" component={Profile} />
  </Switch>
);

const LoggedOutPages = () => (
  <Switch>
    <Route path="/" exact component={Auth} />
  </Switch>
);

export default ({ loggedIn }) => (
  <Router>{loggedIn ? <LoggedInPages /> : <LoggedOutPages />}</Router>
);
