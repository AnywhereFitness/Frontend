import React, { useState, useEffect } from "react";
import axiosWithAuth from "../clients/API/axiosWithAuth";
import mountainyoga from "./img/mountainyoga.jpg";
import {withFormik, Form, Field} from "formik"
import * as Yup from 'yup'


const UserForm = ({ values, errors, touched, status}) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: ""
  });
  useEffect(() => {
    console.log("status has changed", status);
    status && setUser(user => [...user, status]);
  }, [status]);

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
      <Form>
        <Field
          type="text"
          name="firstName"
          placeholder="First Name"
          value={user.firstName}
          onChange={handleChange}
        />
        <Field
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={user.lastName}
          onChange={handleChange}
        />
        <Field
          type="text"
          name="email"
          placeholder="email"
          value={user.email}
          onChange={handleChange}
        />
        {touched.email && errors.email}
        <Field
          type="password"
          name="password"
          placeholder="password"
          value={user.password}
          onChange={handleChange}
        />
        <Field
          type="text"
          name="role"
          placeholder="role"
          value={user.role}
          onChange={handleChange}
        />
        <button className="register-btn" type="submit">
          Create Your Account
        </button>
      </Form>
    </div>
    </div>
    </>
  );
};

const ValidatedUserForm = withFormik ({
  mapPropsToValues({ FirstName, lastName, email, password, role }) {
    return{
      firstName: "",
          lastName: "",
          email: "",
          password: "",
          role: ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email("invalid Email").required(),
    password: Yup.string().required(),
    role: Yup.string().required("Please specify a role"),
  }),
handleSubmit(values, { setStatus, resetForm}) {
  console.log("submitting", values);
  axiosWithAuth
    .post("/api/auth/register", values)
    .then(res => {
      console.log("Sucessful post, new user registered", res);
      setStatus(res.data);
      resetForm()
    })
    .catch(err => console.log(err.response))
  }
})(UserForm);


export default ValidatedUserForm;
