import React, { useState } from "react";
import "./Login.css";

const DEFAULT_LOGIN = {
  email: "",
  password: "",
};

const Login = () => {
  const [loginForm, setLoginForm] = useState(DEFAULT_LOGIN);

  const changeHandler = (e) => {
    setLoginForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (loginForm.email === "") {
      setError("This field is required!");
      return;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(loginForm.email)
    ) {
      setError("Invalid email address!!");
      return;
    } else if (loginForm.password === "") {
      setError("This field is required!");
      return;
    }
  };

  return (
    <div className="login">
      <form className="login_form">
        <p className="error_message">{error}</p>
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
          value={loginForm.email}
          onChange={changeHandler}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={loginForm.password}
          onChange={changeHandler}
        />
        <button onClick={submitHandler}>Login</button>
      </form>
    </div>
  );
};

export default Login;
