import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../styles/style.css";
import PrivateRoute from "./PrivateRoute";

import Home from "../pages/Home.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import SecretPage from "../pages/SecretPage.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/secret" component={SecretPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
