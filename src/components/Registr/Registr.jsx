import React, { useState } from "react";
import { icon } from "../../contrains";
import Input from "../../UI/Input";
import "./Registr.scss";

const Registr = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <section className="registr">
      <div className="container">
        <img src={icon} alt="icon" />
        <h1>Please regester</h1>
        <form action="">
          <Input
            value={name}
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
          <button className="btn-form" type="submit">
            Registr
          </button>
        </form>
      </div>
    </section>
  );
};

export default Registr;
