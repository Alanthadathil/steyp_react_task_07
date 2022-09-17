import React from "react";
import "./App.css";
import LetfSection from "./components/screens/LetfSection";
import MiddleSection from "./components/screens/MiddleSection";
import styled from "styled-components";
import RightSection from "./components/screens/RightSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <MainContainer>
                            <LetfSection />
                            <MiddleSection />
                            <RightSection />
                        </MainContainer>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;

const MainContainer = styled.section`
    display: flex;
`;
