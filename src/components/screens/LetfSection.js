import React from "react";
import styled from "styled-components";
import LogoSrc from "../../assets/images/logo.png";
import CopyImg from "../../assets/images/Copyright-color.svg";
import { Link } from "react-router-dom";

function LetfSection() {
    return (
        <>
            <Container>
                <TopSection>
                    <Logo>
                        <LogoImg src={LogoSrc} />
                    </Logo>
                    <List>
                        <Link to="/">
                            <ListItem>Reservation</ListItem>
                        </Link>
                        <Link to="tableservice">
                            <ListItem>Table Service</ListItem>
                        </Link>
                        <Link to="/">
                            <ListItem>Menu</ListItem>
                        </Link>
                        <Link to="delivery">
                            <ListItem>Delivery</ListItem>
                        </Link>
                        <Link to="accounting">
                            <ListItem>Accounting</ListItem>
                        </Link>
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
    @media all and (max-width: 768px) {
        display: none;
    }
`;
const TopSection = styled.div``;
const Logo = styled.h1`
    width: 180px;
    cursor: pointer;
    @media all and (max-width: 980px) {
        width: 124px;
    }
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
    @media all and (max-width: 980px) {
        padding: 16px 0px;
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
    @media all and (max-width: 980px) {
        font-size: 14px;
    }
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
