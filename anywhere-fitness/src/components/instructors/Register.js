import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../../actions";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";

export class Register extends Component {
  state = {
    user: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      role: ""  
    }
  };

  handleChange = e => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  };

  register = e => {
    e.preventDefault();
    this.props.register(this.state.user).then(res => {
      if (res) {
        this.props.history.push("/instructor");
      }
    });
  };

  render() {
    return (
      <div className="register">
        <div className="register-section">
          <div className="register-label">Create Your Instructor Account</div>
          <form className="register-form" onSubmit={this.register}>
            <input type="text" name="firstName" placeholder="First Name" value={this.state.user.firstName}
              onChange={this.handleChange}
            />
            <input type="text" name="lastName" placeholder="Last Name" value={this.state.user.lastName}
              onChange={this.handleChange}
            />

            <input type="email" name="email" placeholder="Email" value={this.state.user.email}
              onChange={this.handleChange}
            />
            <input type="password" name="password" placeholder="Password" value={this.state.user.password}
              onChange={this.handleChange}
            />
            <input type="text" name="role" placeholder="Role: instructor" value={this.state.user.role}
              onChange={this.handleChange}
            />
            <button className="register-btn">
              {this.props.creatingUser ? (
                <Loader type="TailSpin" color="#FF9233" height="26" width="26"
                />
              ) : (
                "Register"
              )}
            </button>
            <Link className="redirect-login" to="/instructor">
              Existing user! Sign in here
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.registerReducer.error,
    creatingUser: state.registerReducer.creatingUser
  };
};

export default connect(
  mapStateToProps,
  { register }
)(Register);
