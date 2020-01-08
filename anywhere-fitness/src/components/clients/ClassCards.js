import React from 'react'
import styled from "styled-components";


export default function ClassCards(props) {
    



    return (
        <div>
            <h2>{props.name}</h2> 
            <h5>type: {props.type}</h5>
            <p>{props.location}</p>
            <p>{props.description}</p>
        </div>
    )
}
