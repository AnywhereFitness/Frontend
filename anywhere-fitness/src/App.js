
import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/instructors/Home";
import Login from "./components/instructors/Login";
import Register from "./components/instructors/Register";
import PrivateRoute from "./components/instructors/PrivateRoute";
import { connect } from "react-redux";
import { isLoggedIn, logout } from "./actions";
import cookie from "react-cookies";
import InstructorProfile from "./components/instructors/InstructorProfile";

class App extends React.Component {
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.isLoggedIn(cookie.load("instructor"));
    }
  }

  logout() {
    this.props.logout();
    this.props.history.push("/logout");
  }

  render() {
    return (
      <div className="App">
        <nav className="nav">
          <div className="nav-links">
            <div className="home-link">
            </div>
            {this.props.loggedIn || this.props.clientLoggedIn ? (
              <div className="user-links">
                <button className="logout-btn" onClick={() => this.logout()}>
                  Logout
                </button>
              </div>
            ) : (
              <div />
            )}
          </div>
        </nav>

        <Route
          path="/logout"
          component={() => {
            window.location.href =
              "http://localhost:3004/instructor";
            return null;
          }}
        />

        <Route
          exact
          path="/instructor"
          render={props => <Login {...props} />}
        />

        <Route
          path="/instructor/register"
          render={props => <Register {...props} />}
        />

        <PrivateRoute
          exact
          path="/instructor/home"
          component={props => <Home {...props} />}
        />

          <Route
          exact
          path="/instructor/profile"
          render={props => <InstructorProfile {...props} />}
        />

      </div>
    );
  }
const mapStateToProps = state => {
  return {
    loggedIn: state.loginReducer.loggedIn,
    singleClass: state.homeReducer.singleClass
  };
};

export default connect(
  mapStateToProps,
  { isLoggedIn, logout }
)(App);