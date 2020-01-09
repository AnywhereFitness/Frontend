import React, { Component } from "react";
import { connect } from "react-redux";
import { createClass } from "../../actions";
import cookie from "react-cookies";
import { Link } from "react-router-dom";

export class AddInstructorClass extends Component {
  state = {
    singleClass: {
      type: "",
      intensityLevel: "",
      days: "",
      name: "",
      date: "",
      time: "",
      duration: "",
      startTime: "",
      endTime: "",
      location: "",
      description: "",
      price: "",
      size: "",
      instructor: cookie.load("instructor")[0]["id"]
    }
  };

  changeHandler = e => {
    e.persist();
    let value = e.target.value;
    if (e.target.name === "category_id") {
      value = parseInt(value, 10);
    }
    this.setState(prevState => ({
      singleClass: {
        ...prevState.singleClass,
        [e.target.name]: value
      }
    }));
  };

  hanldeSubmit = e => {
    e.preventDefault();
    this.props.createClass(this.state.singleClass);
    this.props.history.push("/instructor/home");
    this.setState({
      singleClass: {
        type: "",
        intensityLevel: "",
        days: "",
        name: "",
        intensity: "",
        date: "",
        time: "",
        location: "",
        description: "",
        price: "",
        size: "",
        }
    });
  };

  render() {
    return (
      <div className="add-class-form">
        <form
          onSubmit={e => {
            this.hanldeSubmit(e);
          }}
        >
          <Link to="/instructor/home">
            <button className="back-btn">{`<--`} Back to Home</button>
          </Link>
          <div className="form-label">Add New Class</div>
          <div className="form-group">
            Type:
            <input
              className="add-class-name-input"
              required
              type="text"
              onChange={this.changeHandler}
              placeholder="Class Type"
              name="type"
              value={this.state.singleClass.type}
            />
            Intensity Level:
            <input
              className="add-class-name-input"
              required
              type="text"
              onChange={this.changeHandler}
              placeholder="intensity level"
              name="intensityLevel"
              value={this.state.singleClass.intensityLevel}
            />
            Days:
            <input
              className="add-class-name-input"
              required
              type="text"
              onChange={this.changeHandler}
              placeholder="Days"
              name="days"
              value={this.state.singleClass.days}
            />
         </div>
          <div className="form-group">
            Class Name:
            <input
              className="add-class-name-input"
              required
              type="text"
              onChange={this.changeHandler}
              placeholder="Class Name"
              name="name"
              value={this.state.singleClass.name}
            />
          </div>
          <div className="form-group">
            date:
            <input
              required
              type="text"
              onChange={this.changeHandler}
              placeholder="Date"
              name="date"
              value={this.state.singleClass.date}
            />
            time:
            <input
              required
              type="text"
              onChange={this.changeHandler}
              placeholder="Time"
              name="time"
              value={this.state.singleClass.time}
            />
            Duration:
            <input
              required
              type="text"
              onChange={this.changeHandler}
              placeholder="e.g. 1 hour 30 minutes"
              name="duration"
              value={this.state.singleClass.duration}
            />
            Start Time:
            <input
              required
              type="text"
              onChange={this.changeHandler}
              placeholder="e.g. 4:00 pm"
              name="startTime"
              value={this.state.singleClass.startTime}
            />
            End Time:
            <input
              required
              type="text"
              onChange={this.changeHandler}
              placeholder="e.g. 6 pm"
              name="endTime"
              value={this.state.singleClass.endTime}
            />
            
          </div>
          <div className="form-group">
            Location:
            <input
              required
              type="text"
              onChange={this.changeHandler}
              placeholder="Location"
              name="location"
              value={this.state.singleClass.location}
            />
            Price:
            <input
              type="number"
              onChange={this.changeHandler}
              placeholder="price"
              name="price"
              value={this.state.singleClass.price}
            />
            Class size:
            <input
              required
              type="number"
              onChange={this.changeHandler}
              placeholder="size"
              name="size"
              value={this.state.singleClass.size}
            />
          </div>
          <div className="form-group">
            description:
            <input
              required
              type="text"
              onChange={this.changeHandler}
              placeholder="Description"
              name="description"
              value={this.state.singleClass.description}
            />
          </div>
          <button className="add-class-btn">Add Class</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    singleClass: state.homeReducer.singleClass,
    instructor: state.loginReducer.instructor
  };
};

export default connect(
  mapStateToProps,
  { createClass }
)(AddInstructorClass);