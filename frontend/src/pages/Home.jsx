import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      
      <h3>Welcome!</h3>
      <aside>Please, login to get a secret room</aside>

      <div className="b-login_ref">
        <Link to="/secret">
          Login
        </Link>
      </div>

    </section>
  );
};

export default Home;
