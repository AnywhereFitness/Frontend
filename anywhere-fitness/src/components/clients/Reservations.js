import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axiosWithAuth from "./API/axiosWithAuth";

export default function Reservations(){
    const [Reservation, setReservation] = useState([]);
    useEffect(() => {
        axiosWithAuth()
          .get("/api/client/reservations")
          .then(response => {
            console.log("This is the reservation list ", response);
            const data = response.data;
            response.data.forEach(item => {
                axiosWithAuth()
                .get(`/api/classes/${item.classId}`)
                .then(res =>
                   setReservation(res.data)
                    )
                
            })
            
          })
          .catch(error => {
            console.log("Data could not be retrieved", error);
          });
          
      }, [Reservation]);

          


    return (
        <>

        <h1>Reservations</h1>
        <h2>{Reservation.type}</h2>
        <h3>{Reservation.name}</h3>
        <p>{Reservation.Starttime}</p>
        </>
    )
}