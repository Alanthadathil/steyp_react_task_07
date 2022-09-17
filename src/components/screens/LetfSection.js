import React from "react";
import styled from "styled-components";
import LogoSrc from "../../assets/images/logo.png";
import CopyImg from "../../assets/images/Copyright-color.svg";
import { Link, NavLink } from "react-router-dom";

function LetfSection() {
    return (
        <>
            <Container>
                <TopSection>
                    <Logo>
                        <LogoImg src={LogoSrc} />
                    </Logo>
                    <List>
                        <ListItem>
                            <NavLink to="/" className="activeLink">
                                Reservation
                            </NavLink>
                        </ListItem>
                        <ListItem>
                            <NavLink to="/" className="activeLink">
                                Table Service
                            </NavLink>
                        </ListItem>
                        <ListItem>
                            <NavLink to="/" className="activeLink">
                                Menu
                            </NavLink>
                        </ListItem>
                        <ListItem>
                            <NavLink to="/" className="activeLink">
                                Delivery
                            </NavLink>
                        </ListItem>
                        <ListItem>
                            <NavLink to="/" className="activeLink">
                                Accounting
                            </NavLink>
                        </ListItem>
                    </List>
                </TopSection>
                <BottomSection>
                    <Bottombtn>
                        <BtnLogo>L</BtnLogo>
                        <BtnCaption>Lesliya k.</BtnCaption>
                    </Bottombtn>
                    <Bottombtn>
                        <BtnLogo>C</BtnLogo>
                        <BtnCaption>Camaron w.</BtnCaption>
                    </Bottombtn>

                    <Bottombtn>
                        <BtnLogo>J</BtnLogo>
                        <BtnCaption>Jacob j.</BtnCaption>
                    </Bottombtn>
                    <CopyDiv>
                        <CopyRight src={CopyImg} />
                        <CopyText>2022 CosyPOS App</CopyText>
                    </CopyDiv>
                </BottomSection>
            </Container>
        </>
    );
}

export default LetfSection;

const Container = styled.section`
    background: #000;
    width: 20%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const TopSection = styled.div``;
const Logo = styled.h1`
    width: 180px;
    cursor: pointer;
`;
const LogoImg = styled.img`
    width: 100%;
    display: inline-block;
`;
const List = styled.ul`
    color: #fff;
`;
const ListItem = styled.li`
    font-size: 20px;
    padding: 16px 24px;
    border: 8px;
    cursor: pointer;
    color: #666;
    &:hover {
        background: #212121;
        border-radius: 8px;
        color: #fff;
    }
    @media all and (max-width: 1440px) {
        font-size: 18px;
    }
    @media all and (max-width: 1050px) {
        font-size: 16px;
    }
`;
const BottomSection = styled.div``;
const Bottombtn = styled.button`
    border: 1px solid #fff;
    border-radius: 24px;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 6px;
    margin-bottom: 24px;
    &:last-child {
        margin-bottom: 0;
    }
    &:hover {
        background: #212121;
    }
`;
const BtnLogo = styled.span`
    display: inline-block;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: #c3e9de;
    margin-right: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
`;
const BtnCaption = styled.small`
    color: #fff;
    font-size: 18px;
    display: inline-block;
`;
const CopyRight = styled.img``;
const CopyText = styled.small`
    margin-left: 12px;
    color: #a6a6a6;
`;
const CopyDiv = styled.div`
    display: flex;
    margin-top: 48px;
`;
