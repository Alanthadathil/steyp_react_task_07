import React from "react";
import styled from "styled-components";

function TableService() {
    return (
        <>
            <Container>
                <Heading>Table Service Not Available...</Heading>
            </Container>
        </>
    );
}

export default TableService;

const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;
const Heading = styled.h1`
    color: red;
`;
