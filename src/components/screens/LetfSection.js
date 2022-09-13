import React from "react";
import styled from "styled-components";
import LogoSrc from "../../assets/images/logo.png";

function LetfSection() {
    return (
        <>
            <Container>
                <TopSection>
                    <Logo>
                        <LogoImg src={LogoSrc} />
                    </Logo>
                    <List>
                        <ListItem>Reservation</ListItem>
                        <ListItem>Table Service</ListItem>
                        <ListItem>Menu</ListItem>
                        <ListItem>Delivery</ListItem>
                        <ListItem>Accounting</ListItem>
                    </List>
                </TopSection>
                <BottomSection>
                    <Bottombtn>
                        <BtnLogo></BtnLogo>
                        <BtnCaption>Lesliya k.</BtnCaption>
                    </Bottombtn>
                    <Bottombtn>
                        <BtnLogo></BtnLogo>
                        <BtnCaption>Camaron w.</BtnCaption>
                    </Bottombtn>
                    <Bottombtn>
                        <BtnLogo></BtnLogo>
                        <BtnCaption>Jacob j.</BtnCaption>
                    </Bottombtn>
                </BottomSection>
            </Container>
        </>
    );
}

export default LetfSection;

const Container = styled.section`
    background: #000;
    width: 20%;
    height: 100vh;
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
    &:nth-child(2n) {
        background: red !important;
    }
`;
const BtnCaption = styled.small`
    color: #fff;
    font-size: 18px;
    display: inline-block;
`;
