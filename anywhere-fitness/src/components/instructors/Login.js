import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { login } from "../../actions";
import { Link } from "react-router-dom";

export class Login extends Component {
  state = {
    credentials: {
      email: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials).then(res => {
      if (res) {
        this.props.history.push("./instructor/home");
      }
    });
  };

  render() {
    return (
      <div className="login">
        <div className="login-section">
          <div className="login-label">
          <div className="login-label">Log In As Instructor</div>
          </div>
          <form className="login-form" onSubmit={this.login}>
            <input type="email" name="email" placeholder="Email" value={this.state.credentials.email}
              onChange={this.handleChange}
            />
            <input type="password" name="password" placeholder="Password" value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <button className="login-btn">
              {this.props.loggingIn ? (
                <Loader type="TailSpin" color="#ffffff" height="26" width="26"
                />
              ) : (
                "Login"
              )}
            </button>
            <Link className="redirect-register" to="/instructor/register">
              New user! Sign up here
            </Link>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    error: state.loginReducer.error,
    loggingIn: state.loginReducer.loggingIn
  };
};
export default connect(
  mapStateToProps,
  { login }
)(Login);