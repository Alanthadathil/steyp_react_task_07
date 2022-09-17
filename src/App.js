import React from "react";
import "./App.css";
import LetfSection from "./components/screens/LetfSection";
import MiddleSection from "./components/screens/MiddleSection";
import styled from "styled-components";
import RightSection from "./components/screens/RightSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TableService from "./components/includes/TableService";
import Delivery from "./components/includes/Delivery";
import Accounting from "./components/includes/Accounting";

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
                <Route path="/tableservice" element={<TableService />} />
                <Route path="/delivery" element={<Delivery />} />
                <Route path="accounting" element={<Accounting />} />
            </Routes>
        </Router>
    );
}

export default App;

const MainContainer = styled.section`
    display: flex;
`;
