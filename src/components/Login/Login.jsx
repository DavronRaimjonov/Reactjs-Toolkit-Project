import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { icon } from "../../contrains";
import { loginUserStart } from "../../slice/auth";
import Input from "../../UI/Input";
const Login = () => {
  const dispatch = useDispatch();
  const { isLodaingIn } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHendler = (e) => {
    e.preventDefault();
    dispatch(loginUserStart());
  };
  return (
    <section className="registr">
      <div className="container">
        <img src={icon} alt="icon" />
        <h1>Please login</h1>
        <form action="">
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
