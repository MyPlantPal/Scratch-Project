import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {

	const [ signedIn, setSignedIn ] = useState(false);

	// useEffect for checking if logged in, dependent on signedIn state



  let navigate = useNavigate();
  const toSignUp = () => {
    let path = "/signup";
    navigate(path);
  };
	const toHome = () => {
    let path = "/home";
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

        <h2>Sign In:</h2>

        <div className="signInBox">
          <form onSubmit={Submit}>
            <input name="username" type="text" placeholder="username" />
            <input name="password" type="text" placeholder="password" />
						<input type="submit" value='Sign In'/>
          </form>
					<p>Don't have an account?</p>
					<button onClick={toSignUp}>Sign Up</button>
					<button onClick={toHome}>Temporary : Go straight to home</button>
        </div>
				
      </div>
    </div>
  );
};

export default SignIn;
