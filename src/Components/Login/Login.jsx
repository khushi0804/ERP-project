import React from "react";
import "./Login.css";
import { FaUser,FaLock } from "react-icons/fa";
const Login = () => {
  return (
    <div className="uperwrapper">
      <div className="wrapper">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="email" placeholder="Enter Email" required />
            <FaUser className="icon"/>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Enter your password" required />
            <FaLock className="icon"/>
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Are you agree with Terms & Conditions
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit">Login</button>

          <div className="register-link">
            <p>
              Don't have an account? <a href="#">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
