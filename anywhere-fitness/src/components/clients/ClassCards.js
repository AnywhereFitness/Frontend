import React from 'react'
import styled from 'styled-components'

export default function ClassCards(props) {

    const Clas = styled.div`
    width: 876px;
    box-sizing: border-box;
    `
    const Description = styled.div`
    border-right: 1px solid #BDBDBD;
    `



    return (
        <div>
        <Clas>
            <h2> {props.type}</h2>
            <p>location: {props.location}</p>
        </Clas>
            <Description>
            <p>{props.description}</p>
            </Description>
        </div>
    )
}
