import React from 'react'
import styled from "styled-components";


const Title = styled.h1`
color: red;
`;

const Thing = styled.p`
color: blue;
`;

const Wrapper = styled.div`
background: white;
border: black 1px dashed;
margin: 20px;
max-width: 60%;
opacity: 0.5;
`;

const NameCard = (props) => (
<Wrapper>
        <Title>Hi, my name is {props.name}!</Title>
        <Thing>I identify with the {props.gender} gender.</Thing>
</Wrapper>
)

export default NameCard;