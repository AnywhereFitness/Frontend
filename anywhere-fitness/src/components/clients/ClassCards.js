import React, { useState } from "react";
import styled from "styled-components";
import axiosWithAuth from "./API/axiosWithAuth";

export default function ClassCards(props) {
  const Clas = styled.div`
    width: 450px;
    height: 250px;
    background-color: #bdbdbd;
    background: linear-gradient(#ff9233, #ffaa99);
    box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
    border-radius: 6px;
    overflow: hidden;
    position: relative;
    margin: 1.5rem;
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
  const deleteClass = classDelete => {
    // make a delete request to delete this color
    axiosWithAuth()
      .delete(`/api/classes/${classDelete._id}`)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error, "failed to delete");
      });
    setClasses(classes.filter(clas => clas._id !== classDelete._id));
    setEditing(false);
  };


  return (
    <Clas>
      <h2> {clas.type}</h2>
      <h4>{clas.name}</h4>
      <Description>
        <p>location: {clas.location}</p>
        <p>{clas.description}</p>
      </Description>
      <Editbtn>Edit</Editbtn>
      <Deletebtn onClick={()=>deleteClass(clas)}>Delete</Deletebtn>
    </Clas>
  );
}
