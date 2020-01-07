import React, { useState } from "react";
import axiosWithAuth from "../clients/API/axiosWithAuth";
import { Link } from "react-router-dom";

const UserForm = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: ""
  });

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/auth/register", user)
      .then(res => {
        console.log(e.target);
        UserForm({
          ...user,
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          role: ""
        });
      })
      .catch(error => console.log(error));
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={user.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={user.lastName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        placeholder="email"
        value={user.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={user.password}
        onChange={handleChange}
      />
      <input
        type="text"
        name="role"
        placeholder="role"
        value={user.role}
        onChange={handleChange}
      />
      <button className="register-btn" type="submit">
        Create Your Account
      </button>
    </form>
  );
};
export default UserForm;
