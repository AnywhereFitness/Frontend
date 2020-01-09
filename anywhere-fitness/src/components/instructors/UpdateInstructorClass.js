import React, { Component } from "react";
import { connect } from "react-redux";
import { updateClass, deleteClass, getClassByInstructor } from "../../actions";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { Link } from "react-router-dom";

export class UpdateClassForm extends Component {
    state = {
        singleClass: {
        type: "",
        intensityLevel: "",
        days: "",
        name: "",
        duration: "",
        startTime: "",
        endTime: "",
        location: "",
        description: "",
        price: "",
        size: "",
      }
    };

  componentDidMount() {
    axiosWithAuth()
      .get(
        `https://anywhere-fitness-api.herokuapp.com/api/classes/${this.props.match.params.id}`
      )
      .then(res => { console.log(res.data)
        this.setState({ singleClass: res.data });
      });
  }

  changeHandler = e => {
    e.persist();
    this.setState(prevState => ({
      singleClass: {
        ...prevState.singleClass,
        [e.target.name]: e.target.value
      }
    }));
  };

  render() {
    return (
      <div className="update-class">
        <div className="update-class-form">
          <form
            onSubmit={e => {
              e.preventDefault();
              this.props.updateClass(
                this.state.singleClass.id,
                this.state.singleClass
              );
              this.props.history.push("/instructor/home");
            }}
          >
            <Link to="/instructor/home">
              <button className="back-btn">{`<--`} Back to Home</button>
            </Link>
            <div className="form-label">Edit Class</div>
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
            Duration:
            <input
              required
              type="text"
              onChange={this.changeHandler}
              placeholder="Duration"
              name="duration"
              value={this.state.singleClass.duration}
            />
            Start Time:
            <input
              required
              type="text"
              onChange={this.changeHandler}
              placeholder="Start Time"
              name="startTime"
              value={this.state.singleClass.startTime}
            />
            End Time:
            <input
              required
              type="text"
              onChange={this.changeHandler}
              placeholder="End Time"
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
            Description:
            <input
              required
              type="text"
              onChange={this.changeHandler}
              placeholder="Description"
              name="description"
              value={this.state.singleClass.description}
            />
          </div>
            <div className="update-form-buttons">
              <button className="update-btn" 
                onClick={() => {
                alert('Congrats! You have successfully updated this class.')
                 }}   
              >Update</button>
              <button
                className="delete-btn"
                onClick={e => {
                  e.preventDefault();
                  this.props.deleteClass(
                    this.state.singleClass._id,
                    this.state.singleClass
                  );
                  alert('Congrats! You have successfully deleted this class.')
                  this.props.history.push("/instructor/home");
                }}
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    singleClass: state.homeReducer.singleClass
  };
};

export default connect(
  mapStateToProps,
  {
    updateClass,
    deleteClass,
    getClassByInstructor
  }
)(UpdateClassForm);