import React, { useCallback, useContext } from "react";
import { withRouter } from "react-router";
import app from "../../FireBase";
import "./SignUp.css";
// import video1 from "../Video/video1.mp4"

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);

        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div>
      <img className="gucci" src="//media.gucci.com/content/HeroRegularSmall_750x406/1619622907/HeroRegularSmall_OUVERTURE-21-047_001_Default.jpg"/>
      <div className="signUp">
        <form className="signUp-block" onSubmit={handleSignUp}>
          <label>
            <input
              className="signUp-inp1"
              type="email"
              name="email"
              placeholder="Email"
            />
            <br />
          </label>
          <label>
            <input
              className="signUp-inp2"
              type="password"
              name="password"
              placeholder="Password"
            />
            <br />
          </label>
          <button className="signUp-btn" type="Submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(SignUp);
