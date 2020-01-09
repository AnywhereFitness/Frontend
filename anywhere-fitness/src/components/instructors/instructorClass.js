import React from "react";
import { Link } from "react-router-dom";

const InstructorClass = props => {
  return (
    <div className="instructor-class">
      <div className="instructor-class-name">
        <div className="class-prop">{props.instructorClass.name}</div>
      </div>
      <div className="instructor-class-group">
      <div className="class-prop">{props.instructorClass.intensityLevel}</div>
        <div className="class-prop date">{props.instructorClass.type}</div>
        </div>
      <div className="instructor-class-group">
        <div className="class-prop time">{props.instructorClass.days}</div>
      </div>
      <div className="instructor-class-group">
        <div className="class-prop time">Starts: {props.instructorClass.startTime} | Ends: {props.instructorClass.endTime}</div>
      </div>
      <div className="instructor-class-group">
        <div className="class-prop">Location: {props.instructorClass.location}</div>
      </div>
      <div className="instructor-class-description">
        <div className="class-prop">Description: {props.instructorClass.description}</div>
      </div>
      <div className="instructor-class-description">
        <div className="class-prop">Price: ${props.instructorClass.price}</div>
      </div>
      <div className="instructor-class-description">
        <div className="class-prop">Class Size: {props.instructorClass.size}</div>
      </div>

      <Link
        to={`/instructor/update-class-form/${props.instructorClass._id}`}
      >
        <button className="view-details-btn">View Details</button>
      </Link>
    </div>
  );
};

export default InstructorClass;