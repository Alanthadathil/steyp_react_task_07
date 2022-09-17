import React from "react";
import styled from "styled-components";

function Accounting() {
    return (
        <Container>
            <Heading>Accounts Closed...</Heading>
        </Container>
    );
}

export default Accounting;

const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const Heading = styled.h1`
    color: red;
`;
