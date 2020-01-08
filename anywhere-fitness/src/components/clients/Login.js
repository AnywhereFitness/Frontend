import React, { useState } from "react";
import axiosWithAuth from "./API/axiosWithAuth";
import axios from 'axios' //Michael: imported axios
const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the Client route
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  };

  const login = event => {
    event.preventDefault();
    axios // Michael: changed axios with auth to axios
      .post(`https://anywhere-fitness-api.herokuapp.com/api/auth/login`, user)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        console.log(res.data.token);
        props.history.push("/clienthome");
      })
      .catch(error => console.log(error));
  };
  console.log(user)
  return (
    <>
      <h1>Welcome Client (something to that effect)</h1>
      <form className="login" onSubmit={login}>
        <h2>Login Here</h2>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </>
  );
};

export default Login;
