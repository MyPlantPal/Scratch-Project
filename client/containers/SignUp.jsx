import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [signedUp, setSignedUp] = useState(false);

  // useEffect for checking if logged in, dependent on signedIn state

  let navigate = useNavigate();
  const toSignUp = () => {
    let path = "/signup";
    navigate(path);
  };

  const Submit = () => {
    // signup functionality (POST)

    // redirect to home after signed up (useNavigate)

  };

  return (
    <div>
      <div className="signin-nav-bar">
        <h1>LeafLaughLove</h1>
      </div>
      <div className="signInContainer">
        <h2>Sign Up:</h2>

        <div className="signInBox">
          <form onSubmit={Submit}>
            <input name="username" type="text" placeholder="username" />
            <input name="password" type="text" placeholder="password" />
            <input type="submit" value="Sign Up" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
