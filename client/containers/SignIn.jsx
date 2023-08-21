import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginNavBar from "../components/LoginNav-Bar.jsx";

const SignIn = () => {

	const [ signedIn, setSignedIn ] = useState(false);
  const [ username, setUsername ] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();

  const toSignUp = () => {
    let path = "/signup";
    navigate(path);
  };

  const toHome = () => { //i passed in from line 58 // plantArray
    let path = "/home";
    navigate(path);
  };

  const Submit = async () => {
    // signup functionality (POST)
    try {
      // console.log('Entered try block');
      // console.log('username', username);
      const data = {
        username: username,
        password: password,
      }
      const response = await fetch(`http://localhost:8080/leaf/user/login`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const plantArray = await response.json();
        toHome();
      }
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <div className="signInPage">
      <LoginNavBar />
      <div className="signInContainer">

        <h2>Sign In:</h2>

        <div className="signInBox">
          <input name="username" type="text" placeholder="username" value = {username} onChange={(e) => setUsername(e.target.value)}/>
          <input name="password" type="password" placeholder="password" value = {password} onChange={(e) => setPassword(e.target.value)}/>
          <button onClick={Submit}>Sign In</button>
					<p>Don't have an account?</p>
					<button onClick={toSignUp}>Sign Up</button>
        </div>
				
      </div>
    </div>
  );
};

// export default connect (SignIn)(plantArray);

export default SignIn;
