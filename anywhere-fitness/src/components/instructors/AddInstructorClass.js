import React, { Component ,useState, useEffect}  from "react";
import { connect } from "react-redux";
import { createClass } from "../../actions";
import cookie from "react-cookies";
import { Link } from "react-router-dom";


const [state, setState]= useState({});
useEffect(() =>{
  axios
  .get("https://weightlifting-journal.herokuapp.com/")
  .then(response =>{
      console.log(response.data)
      setState(response.data)
  })
  .catch(error =>{
      console.log(error);
  })
},[]);

export class AddInstructorClass extends Component {
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
      instructor: cookie.load("user").id
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
        {/* <AH> */}
          <Link to="/instructor/home">
            <button className="back-btn">{`<--`} Back to Home</button>
          </Link>
          <button className="skip-btn">Skip</button>
          <div className="form-label"> Create Class</div>
          <div className="form-group">
            Class Type:
            <input
              className="add-class-name-input"
              required
              type="text"
              onChange={this.changeHandler}
              placeholder="Class Type"
              name="type"
              value={this.state.singleClass.type}
            />
            Class Level:
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
            Class Lenght (in minutes):
            <input
              required
              type="text"
              onChange={this.changeHandler}
              placeholder="e.g. 60 (for 60 minutes)"
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
             Class Cost:
            <input
              type="number"
              onChange={this.changeHandler}
              placeholder="price"
              name="price"
              value={this.state.singleClass.price}
            />
            Class Size:
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
             Class Description:
            <input
              required
              type="text"
              onChange={this.changeHandler}
              placeholder="Description"
              name="description"
              value={this.state.singleClass.description}
            />
          </div>
          <button className="add-class-btn"       
            onClick={() => {
            alert('Congrats! You have successfully added a new class.')
             }}
            >Add Class</button>
        </form>
        <span className="myaxios">{state}></span>
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


