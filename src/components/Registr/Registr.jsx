import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { icon } from "../../contrains";
import AuthServie from "../../servic/auth";
import {
  signUserFailrue,
  signUserStart,
  signUserSuccses,
} from "../../slice/auth";
import { ValidationEror } from "../";
import Input from "../../UI/Input";
import "./Registr.scss";
const Registr = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLodaingIn } = useSelector((state) => state.auth);
  const submitHendler = async (e) => {
    e.preventDefault();
    dispatch(signUserStart());
    const user = { username, email, password };
    try {
      const response = await AuthServie.userRegistr(user);
      dispatch(signUserSuccses(response.user));
    } catch (error) {
      dispatch(signUserFailrue(error.response.data.errors));
    }
  };
  return (
    <section className="registr">
      <div className="container">
        <img src={icon} alt="icon" />
        <form action="">
          <h1>Please regester</h1>
          <ValidationEror />
          <Input
            value={username}
            setValue={setName}
            label={"Username"}
            type={"text"}
          />
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

export default Registr;
