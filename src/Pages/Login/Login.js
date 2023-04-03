import "./Login.css";
import React, { useState } from "react";
//import{Box, Typography, TextField, Button} from "@mui/material"
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signInUser } from "../../Redux/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [passShow, setPassShow] = useState(false);
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const sendRequest = async () => {
    return await axios
      .post("http://localhost:4000/api/login", {
        email: inputs.email,
        password: inputs.password,
      })
      .then((res) => {
        console.log(res.data);
        dispatch(signInUser(res.data));

        history("/Welcom");
      })
      .catch((e) => toast.error(e.response.data.message));
  };

  /* const handleSubmit = (e) => {
            e.preventDefault();
            // sending request http
            sendRequest().then(() => history("/welcom")) 
          };*/

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Welcome Back, Log In</h1>
            <p>Hi, we are you glad you are back. Please login.</p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={inputs.email}
                onChange={handleChange}
                name="email"
                id="email"
                placeholder="Enter Your Email Address"
              />
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input
                  type={!passShow ? "password" : "text"}
                  onChange={handleChange}
                  value={inputs.password}
                  name="password"
                  id="password"
                  placeholder="Enter Your password"
                />
                <div
                  className="showpass"
                  onClick={() => setPassShow(!passShow)}
                >
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>
            <button type="button" className="btn" onClick={sendRequest}>
              Login
            </button>
            <p className="text">
              Don't have an Account? <NavLink to="/signup"> Sign Up </NavLink>{" "}
            </p>
            <p className="text" style={{ color: "black" }}>
              {" "}
              Forgot Password <NavLink to="/password-reset">
                Click Here
              </NavLink>{" "}
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
