import React, { useState } from "react";
import "./Signup.css";

const DEFAULT_FORM = {
  name: "",
  email: "",
  password: "",
};

const Signup = () => {
  const [signForm, setSignForm] = useState(DEFAULT_FORM);

  const changeHandler = (e) => {
    setSignForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (signForm.name === "") {
      setError("Please enter your name");
      return;
    } else if (signForm.email === "") {
      setError("Please enter your email");
      return;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(signForm.email)
    ) {
      setError("Invalid Email!!");
      return;
    } else if (signForm.password === "") {
      setError("Please enter your password");
      return;
    }
  };

  return (
    <div className="signup">
      <form className="signup_form">
        <p className="error_message">{error}</p>
        <input
          type="text"
          name="name"
          value={signForm.name}
          placeholder=""
          onChange={changeHandler}
        />

        <input
          type="email"
          name="email"
          value={signForm.email}
          placeholder=""
          onChange={changeHandler}
        />

        <input
          type="password"
          name="password"
          value={signForm.password}
          placeholder=""
          onChange={changeHandler}
        />
        <button onClick={submitHandler}>Submit</button>
      </form>
    </div>
  );
};

export default Signup;
