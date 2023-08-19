import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PlantDisplay from "../components/PlantDisplay.jsx";
import Plant from "../components/PlantCard.jsx";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [signedIn, setSignedIn] = useState(false);

  // useEffect for checking if logged in, dependent on signedIn state

  let navigate = useNavigate();
  const toSignUp = () => {
    let path = "/signup";
    navigate(path);
  };

  const Submit = () => {
    // login functionality
    // redirect to home
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
