import React from "react";

import { useState } from "react";

export default function Register() {
  const [input, setInput] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((previousState) => ({ ...previousState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const userInfo = {
      firstname: input.firstName,
      lastname: input.lastName,
      email: input.email,
      password: input.password,
    };

    console.log(userInfo);

    setInput("");
  };
  return (
    <div className="container register-div">
      <form className="register-form" onSubmit={handleSubmit}>
        <label>first name:</label>
        <input
          type="text"
          name="firstName"
          value={input.firstName }
          onChange={handleChange}
        />

        <label>last name:</label>
        <input
          type="text"
          name="lastName"
          value={input.lastName }
          onChange={handleChange}
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={input.email}
          onChange={handleChange}
        />

        <label>password:</label>
        <input
          type="password"
          name="password"
          value={input.password}
          onChange={handleChange}
        />

        <button className="register-button mt-3" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
