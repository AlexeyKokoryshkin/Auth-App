import React from "react";
import { useHistory } from "react-router-dom";
import * as moment from 'moment';
import auth from "../utils/auth";


const SecretPage = () => {

  function parseJwt(token) {
    try {
      const base64HeaderUrl = token.split('.')[0];
      const base64Header = base64HeaderUrl.replace('-', '+').replace('_', '/');
      const headerData = JSON.parse(window.atob(base64Header));

      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      const dataJWT = JSON.parse(window.atob(base64));
      dataJWT.header = headerData;

      return dataJWT;
    } catch (err) {
      return false;
    }
  }


  const jwtDecoded = parseJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjA1OTc1NjAxLCJleHAiOjE2MDg1Njc2MDF9.bifUPQZ3V9BjprNtlHj8YQb6Yo6JEAv-94nnIZ-lOoc");

  const history = useHistory();

  const logout = () => {
    auth.clearToken();
    history.push("/");
  }



  return (
    <main>
      <h3>This is a secret page that should only be visible by authenticated members</h3>
      <ul>
        <li><b>id:</b> {jwtDecoded.id}</li>
        <li><b>iat:</b> {moment(jwtDecoded.iat).format('MMMM Do YYYY, h:mm:ss a')}</li>
        <li><b>exp:</b> {moment(jwtDecoded.exp).format('MMMM Do YYYY, h:mm:ss a')}</li>
        <li><b>Таймер срока истечения токена:</b> {moment(jwtDecoded.exp).endOf('hour', 'minute').fromNow()}</li>
        <li><b>type:</b> {jwtDecoded.header.typ}</li>
      </ul>
      <button onClick={logout}>Log out</button>
    </main>
  );
};

export default SecretPage;


