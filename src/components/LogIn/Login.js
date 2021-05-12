import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../../FireBase";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import "./Login.css";
// import video2 from "../Video/video2.mp4";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      let data = await axios("http://localhost:8000/admin");
      let admin = data.data;
      console.log(email, admin.email);
      console.log(password, admin.password);
      if (admin.email == email.value || admin.password == password.value) {
        history.push("/admin");
        return;
      }
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <div className="login-block">
        {/* <video
                    className="login-img"
                    src={video2}
                    autoPlay
                    loop
                    muted
                ></video> */}
        <img
          className="login-img"
          src="https://wallpaperscave.ru/images/original/18/01-12/products-gucci-9277.jpg"
          alt=""
        />
        <div className="login-inp">
          {/* <button type="currentUser">user</button>
            <button type="admin">Admin</button> */}
          {/* <h1>Login</h1> */}
          <form className="login-form" onSubmit={handleLogin}>
            <label>
              <input
                className="login-email"
                type="email"
                name="email"
                placeholder="E.M.A.I.L"
              />
            </label>
            <label>
              <input
                className="login-password"
                type="password"
                name="password"
                placeholder="P.A.S.S.W.O.R.D"
              />
            </label>
            <button className="login-btn" type="Submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default withRouter(Login);
