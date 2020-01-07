import React from "react";
import { Link } from "react-router-dom";

const InstructorClass = props => {
  return (
    <div className="instructor-class">
      <div className="instructor-class-name">
        <div className="class-prop">{props.instructorClass.className}</div>
      </div>
      <div className="instructor-class-group">
        <div className="class-prop date">{props.instructorClass.date}</div>
        <div className="class-prop time">{props.instructorClass.time}</div>
      </div>
      <div className="instructor-class-group">
        <div className="class-prop">{props.instructorClass.address}</div>
        <div className="class-prop">{props.instructorClass.city}</div>
        <div className="class-prop">{props.instructorClass.zipcode}</div>
      </div>
      <div className="instructor-class-description">
        <div className="class-prop">{props.instructorClass.description}</div>
      </div>
      <Link
        to={`/instructor/update-class-form/${props.instructorClass.classId}`}
      >
        <button className="view-details-btn">View Details</button>
      </Link>
    </div>
  );
};

export default InstructorClass;