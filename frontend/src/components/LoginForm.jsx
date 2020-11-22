import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import auth from "../utils/auth";
import request from "../utils/request";

const LoginForm = () => {
  const [data, setData] = useState({ username: "", password: "" }, []);

  const history = useHistory();

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const body = { identifier: data.username, password: data.password };
    const requestURL = "http://localhost:1337/auth/local";

    request(requestURL, { method: "POST", body: body })
      .then((response) => {
        auth.setToken(response.jwt, body.rememberMe);
        auth.setUserInfo(response.user, body.rememberMe);
        redirectUser();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const redirectUser = () => {
    history.push("/secret");
  };

  return (
    <form className="form-container">
      <h1>
        Authorization
          </h1>
      <div className="form-group">
        <input
          placeholder="Username"
          id="username-input"
          type="email"
          className="form-control"
          name="username"
          value={data.username}
          onChange={handleOnChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          placeholder="Password"
          id="password-input"
          type="password"
          className="form-control"
          name="password"
          value={data.password}
          onChange={handleOnChange}
          required
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
        />
      </div>

      <button onClick={handleOnSubmit}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
