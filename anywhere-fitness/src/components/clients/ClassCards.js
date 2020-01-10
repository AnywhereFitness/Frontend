import React, { useState } from "react";
import styled from "styled-components";
import axiosWithAuth from "./API/axiosWithAuth";

export default function ClassCards(props) {
  const Clas = styled.div`
    width: 80%;
    height: 250px;
    background-color: #bdbdbd;
    background: linear-gradient(#ff9233, #ffaa99);
    box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
    border-radius: 6px;
    overflow: hidden;
    position: relative;
    margin: 1.5rem auto;
    opacity: 0.9;
  `;
  const Description = styled.div`
    border-top: 1px solid #bdbdbd;
  `;
  const Editbtn = styled.button`
    width: 195px;
    height: 22px;
    color: #1b1a1a;
    background-color: #bdbdbd;
    border: none;
    border-radius: 5px;
    font-family: raleway;
    font-weight: bold;
    padding: 0 4%;
  `;
  const Deletebtn = styled.button`
    width: 195px;
    height: 22px;
    color: #1b1a1a;
    background-color: #bdbdbd;
    border: none;
    border-radius: 4px;
    font-family: raleway;
    font-weight: bold;
    padding: 0 4%;
  `;

const [editing, setEditing] = useState(false);
const [classToEdit, setClassToEdit] = useState();

const {setClasses, classes, clas}= props;
  const deleteReservation = classDelete => {
    // make a delete request to delete this reservation
    axiosWithAuth()
      .delete(`/api/client/reservation/${classDelete._id}`)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error, "failed to delete");
      });
    setClasses(classes.filter(clas => clas._id !== classDelete._id));
    setEditing(false);
  };

const Reservaton = event => {
    event.preventDefault();
    axiosWithAuth()
    .post(`/api/client/reservation/${clas._id}`, clas,)
    .then(res => {
        console.log(res)
        console.log(res.data)
    })
}


  return (
    <Clas>
      <h2> {clas.type}</h2>
      <h4>{clas.name}</h4>
      <Description>
        <p>location: {clas.location}</p>
        <p>{clas.description}</p>
      </Description>
      <Editbtn onClick={Reservaton}>Reserve</Editbtn>
      <Deletebtn onClick={()=>deleteReservation(clas)}>Delete Reservation</Deletebtn>
    </Clas>
  );
}