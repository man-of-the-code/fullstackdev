import React, { useState } from "react";
import "./Mix.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [inpVal, setInpVal] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInpVal(() => {
      return {
        ...inpVal,
        [name]: value,
      };
    });
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    const { email, password } = inpVal;
    if (!email || !password) {
      alert("All fields are required");
    } else if (!email.includes("@")) {
      alert("Invalid Credentials");
    } else if (password.length < 6) {
      alert("Invalid Credentials");
    } else {
      alert("Login successfully");
    }
  };

  return (
    <div className="login">
      <div className="section">
        <div className="formData">
          <div className="formHeading">
            <h3>Login</h3>
            <h5>login to learn with Er. Mahato G</h5>
          </div>
          <form>
            <div className="inputData">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={inpVal.email}
                onChange={changeHandler}
              />
            </div>
            <div className="inputData">
              <div className="two">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={inpVal.password}
                  onChange={changeHandler}
                />
                <div className="showPass">show</div>
              </div>
            </div>
            <button onClick={loginSubmit}>Login</button>
            <p>
              don't have an account ? <NavLink to="/register">Sign Up</NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
