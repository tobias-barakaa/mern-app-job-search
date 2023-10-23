import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import Logo from "../components/Logo";
import { FormRow } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow
        type="text"
        name="name"
        defaultValue="Tobby"
        />

<FormRow
        type="text"
        name="lastName"
        defaultValue="ngaira"
        />

<FormRow
        type="text"
        name="location"
        defaultValue="earth"
        />

<FormRow
        type="text"
        name="enauk"
        defaultValue="Tobby@gmail.com"
        />

<FormRow
        type="text"
        name="Password"
        defaultValue="default"
        />

        
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
