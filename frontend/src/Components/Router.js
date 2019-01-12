import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

const LoggedInPages = () => "Logged In";

const LoggedOutPages = () => "Logged Out";

export default ({ loggedIn }) => (
  <Router>{loggedIn ? <LoggedInPages /> : <LoggedOutPages />}</Router>
);
