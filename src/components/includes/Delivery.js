import React from "react";
import styled from "styled-components";

function Delivery() {
    return (
        <Container>
            <Heading>Delivery Not Available...</Heading>
        </Container>
    );
}

export default Delivery;

const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const Heading = styled.h1`
    color: red;
`;
