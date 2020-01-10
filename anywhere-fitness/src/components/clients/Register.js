import React, { useState } from "react";
import axiosWithAuth from "../clients/API/axiosWithAuth";
import mountainyoga from "./img/mountainyoga.jpg";
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
    <>
    <div className="signup-band">
      <span>Anywhere Fitness</span>
    </div>
    <div className="signup-container">
      <div className="image-half">
          <img src={mountainyoga} alt="Woman doing Yoga on a beach at sunset"></img>
      </div>
      
    <div className="form-half">
      <h1>Register Here</h1>
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
    </div>
    </div>
    </>
  );
};
export default UserForm;
