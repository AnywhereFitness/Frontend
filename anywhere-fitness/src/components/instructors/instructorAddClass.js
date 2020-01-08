import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import InstructorClass from "./instructorClass";

export function CreateClass(props) {
    const [cardInput, setCardInput] = useState({name: "", date: "",time: "", id: null});

    const inputHandler = e => {
    setCardInput({ ...cardInput, [e.target.name]: e.target.value });
  };

   console.log(cardInput)
      const submitHandler = e => {
    e.preventDefault();
    
  };

  return (
    <div className="createClassContainer">
        <h2>Schedule a Class</h2>
        <form className="formHolder" onSubmit={submitHandler}>
            <div>
                <label>Class Name</label>
                  <input
                  type='text'
                  name='name'
                  placeholder="class name"
                  onChange={inputHandler}/>
            </div>
            <div>
                <label>Date</label>
                  <input
                  name='date'
                  placeholder="class name" 
                  type="date"
                  onChange={inputHandler}/>
            </div>
              <div>
                   <label>Time</label>
                  <input
                  name='time'
                  placeholder="class name" 
                  type="time"
                  onChange={inputHandler}/>
              </div>
              <div>
                  <label>Capacity:</label>
                  <input 
                  type="number" 
                  name="quantity"
                  min="0" max="100" 
                  step="10" value="30"/>
              </div>
              <div>
                  <label>Location</label>
                  <input
                  type='text'
                  name='location'
                  placeholder="location"
                  onChange={inputHandler}/>
              </div>
      <button >Add</button>
  </form>
    </div>
);
}