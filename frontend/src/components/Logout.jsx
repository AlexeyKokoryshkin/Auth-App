import React, { useEffect } from "react";

import auth from "../utils/auth";

const Logout = () => {
  useEffect(() => {
    auth.clearToken();
  }, []);

  return (
    <div>
      <h1 className="text-center my-5">Logging out...</h1>
    </div>
  );
};

export default Logout;
