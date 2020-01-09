import React, { Component } from "react";
import { connect } from "react-redux";
import { updateClass, deleteClass, getClass } from "../../actions";
// import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { Link } from "react-router-dom";

export class UpdateClassForm extends Component {
    state = {
        singleClass: {
          id: this.props.match.params.id,
          type: this.props.singleClass,
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
      this.props.getClass(this.props.match.params.id)
      console.log("PROPS FOR DAYZZZZZ", this.props.singleClass)
    }

  // componentDidUpdate(prevProps) {
    // axiosWithAuth()
    //   .get(
    //     `https://anywhere-fitness-api.herokuapp.com/api/classes/${this.props.match.params.id}`
    //   )
    //   .then(res => { console.log(res.data)
    //     this.setState({ singleClass: res.data });
    //   });
    // console.log("PREVIOUS PROPS", prevProps.singleClass)
    // console.log("CURRENT PROPS", this.props.singleClass)
    // if (this.props.singleClass !== prevProps.singleClass) {
      
    //   this.setState((state, props) => ({ 
    //     singleClass: {
    //       type: props.singleClass.type,
    //       intensityLevel: props.singleClass.intensityLevel,
    //       days: props.singleClass.days,
    //       name: props.singleClass.name,
    //       duration: props.singleClass.duration,
    //       startTime: props.singleClass.startTime,
    //       endTime: props.singleClass.endTime,
    //       location: props.singleClass.location,
    //       description: props.singleClass.description,
    //       price: props.singleClass.price,
    //       size: props.singleClass.size,
    //     }
    // }))
    // }
  // }

  

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
    {console.log("SINGLE CLASS OBJECT FROM STATE:", this.props.singleClass)}
   
    if (this.props.gettingClasses) {
      return (<h1>Loading...</h1>) 
    } else { 
      return (
      <div className="update-class">
        <div className="update-class-form">
          <form
            onSubmit={e => {
              e.preventDefault();
              this.props.updateClass(
                this.props.match.params.id,
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
              placeholder={`${this.props.singleClass.type}`}
              name="type"
              value={this.state.singleClass.type}
            />
            Intensity Level:
            <input
              className="add-class-name-input"
              required
              type="text"
              onChange={this.changeHandler}
              placeholder={`${this.props.singleClass.intensityLevel}`}
              name="intensityLevel"
              value={this.state.singleClass.intensityLevel}
            />
            Days:
            <input
              className="add-class-name-input"
              required
              type="text"
              onChange={this.changeHandler}
              placeholder={`${this.props.singleClass.days}`}
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
              placeholder={`${this.props.singleClass.name}`}
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
              placeholder={`${this.props.singleClass.duration}`}
              name="duration"
              value={this.state.singleClass.duration}
            />
            Start Time:
            <input
              required
              type="text"
              onChange={this.changeHandler}
              placeholder={`${this.props.singleClass.startTime}`}
              name="startTime"
              value={this.state.singleClass.startTime}
            />
            End Time:
            <input
              required
              type="text"
              onChange={this.changeHandler}
              placeholder={`${this.props.singleClass.endTime}`}
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
              placeholder={`${this.props.singleClass.location}`}
              name="location"
              value={this.state.singleClass.location}
            />
            Price:
            <input
              type="number"
              onChange={this.changeHandler}
              placeholder={`${this.props.singleClass.price}`}
              name="price"
              value={this.state.singleClass.price}
            />
            Class size:
            <input
              required
              type="number"
              onChange={this.changeHandler}
              placeholder={`${this.props.singleClass.size}`}
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
              placeholder={`${this.props.singleClass.description}`}
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
                    this.props.singleClass._id,
                    this.props.singleClass
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
    )};
  }
}

const mapStateToProps = state => {
  return {
    singleClass: state.homeReducer.singleClass,
    instructorClasses: state.homeReducer.instructorClasses,
    gettingClasses: state.homeReducer.gettingClasses
  };
};

export default connect(
  mapStateToProps,
  {
    updateClass,
    deleteClass,
    getClass
  }
)(UpdateClassForm);