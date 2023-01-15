import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { icon } from "../../contrains";
import AuthServie from "../../servic/auth";
import { ValidationEror } from "../";
import {
  signUserFailrue,
  signUserStart,
  signUserSuccses,
} from "../../slice/auth";
import Input from "../../UI/Input";
const Login = () => {
  const dispatch = useDispatch();
  const { isLodaingIn } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHendler = async (e) => {
    e.preventDefault();
    dispatch(signUserStart());
    const user = { email, password };
    try {
      const response = await AuthServie.userLogin(user);
      dispatch(signUserSuccses(response.user));
    } catch (error) {
      dispatch(signUserFailrue(error.response.data.errors));
    }
  };
  return (
    <section className="registr">
      <div className="container">
        <form action="">
          <img src={icon} alt="icon" />
          <h1>Please login</h1>
          <ValidationEror />
          <Input
            value={email}
            setValue={setEmail}
            label={"Email"}
            type={"email"}
          />
          <Input
            value={password}
            setValue={setPassword}
            label={"Password"}
            type={"password"}
          />
          <button
            onClick={submitHendler}
            className="btn-form"
            type="submit"
            disabled={isLodaingIn}
          >
            {isLodaingIn ? "Lodding..." : "Login"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
