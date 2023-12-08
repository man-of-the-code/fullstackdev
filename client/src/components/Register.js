import React, { useState } from "react";
import "./Mix.css";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [inpVal, setInpVal] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
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
  const registerSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = inpVal;
    if (!name || !email || !password || !cpassword) {
      alert("All fields are required");
    } else if (!email.includes("@")) {
      alert("Please enter a valid email");
    } else if (password.length < 6) {
      alert("password length must be at least 6 char long");
    } else if (password !== cpassword) {
      alert("please confirm your password");
    } else {
      //alert("User registration done successfully");
      const res = await fetch("http://localhost:8009/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, cpassword }),
      });
    }
  };
  return (
    <div className="register">
      <div className="section">
        <div className="formData">
          <div className="formHeading">
            <h3>Sign Up</h3>
            <h5>Sign Up to connect with Er. Mahato G</h5>
          </div>
          <form>
            <div className="inputData">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your Name"
                value={inpVal.name}
                onChange={changeHandler}
              />
            </div>
            <div className="inputData">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your Email"
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
                  placeholder="Enter your Password"
                  value={inpVal.password}
                  onChange={changeHandler}
                />
                <div className="showPass">show</div>
              </div>
            </div>
            <div className="inputData">
              <div className="two">
                <label htmlFor="cpassword">Confirm Password</label>
                <input
                  type="password"
                  id="cpassword"
                  name="cpassword"
                  placeholder="Confirm Password"
                  value={inpVal.cpassword}
                  onChange={changeHandler}
                />
                <div className="showPass">show</div>
              </div>
            </div>
            <button onClick={registerSubmit}>Sign Up</button>
            <p>
              Already have an account ? <NavLink to="/">Sign In</NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
