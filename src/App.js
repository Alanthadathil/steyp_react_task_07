import React from "react";
import "./App.css";
import LetfSection from "./components/screens/LetfSection";
import MiddleSection from "./components/screens/MiddleSection";
import styled from "styled-components";
import RightSection from "./components/screens/RightSection";

function App() {
    return (
        <MainContainer>
            <LetfSection />
            <MiddleSection />
            <RightSection />
        </MainContainer>
    );
}

export default App;

const MainContainer = styled.section`
    display: flex;
`;
