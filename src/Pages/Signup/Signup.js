import "./Signup.css";
import React, { useState } from "react";
//import{Box, Typography, TextField, Button} from "@mui/material"
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../Redux/authSlice";

const Signup = () => {
  //const isLoggedIn ?
  const [passShow, setPassShow] = useState(false);
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    adress: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const sendRequest = async () => {
    return await axios
      .post("http://localhost:4000/api/signup", {
        name: inputs.name,
        adress: inputs.adress,
        phoneNumber: inputs.phoneNumber,
        email: inputs.email,
        password: inputs.password,
      })
      .then((res) => {
        console.log(res.data);
        dispatch(signUpUser(res.data));
        history("/Welcom");
      })
      .catch((e) => toast.error(e.response.data.message));
  };

  /*const handleSubmit = (e) => {
      e.preventDefault();
      // sending request http
      sendRequest().then(() => history("/Welcom"));
    };*/

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section>
      <div className="form_data">
        <div className="form_heading">
          <h1> Sign Up </h1>
          <p>Hi, please add all information </p>
        </div>
        <form>
          <div className="form_input">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={inputs.name}
              onChange={handleChange}
              name="name"
              id="Name"
              placeholder="Enter Your Name "
            />
          </div>
          <div className="form_input">
            <label htmlFor="adress">Address</label>
            <input
              type="text"
              value={inputs.adress}
              onChange={handleChange}
              name="adress"
              id="address"
              placeholder="Enter Your  Address"
            />
          </div>
          <div className="form_input">
            <label htmlFor="phoneNumber">phoneNumber</label>
            <input
              type="text"
              value={inputs.phoneNumber}
              onChange={handleChange}
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Enter Your phoneNumber"
            />
          </div>
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
              <div className="showpass" onClick={() => setPassShow(!passShow)}>
                {!passShow ? "Show" : "Hide"}
              </div>
            </div>
          </div>
          <button type="button" className="btn" onClick={sendRequest}>
            Get Started
          </button>
          <p>
            Have you an Account? <NavLink to="/login"> Log in </NavLink>{" "}
          </p>
        </form>
      </div>
    </section>
  );
};
export default Signup;
