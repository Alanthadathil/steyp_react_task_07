import React from "react";
import styled from "styled-components";

function RightSection() {
    return (
        <>
            <Container>
                <TopDiv>
                    <TopLeft>
                        <RightText>Table 5</RightText>
                        <RightName>Leslie k.</RightName>
                    </TopLeft>
                    <TopRight>
                        <RightLogo>
                            <RightImg
                                src={
                                    require("../../assets/images/Edit.svg")
                                        .default
                                }
                            />
                        </RightLogo>
                    </TopRight>
                </TopDiv>
                <MiddleDiv>
                    <List>
                        <Items>
                            <ItemDetails>
                                <Serial>1</Serial>
                                <ItemName>Roast chicken</ItemName>
                                <ItemCount>x2</ItemCount>
                            </ItemDetails>
                            <PriceSection>
                                <Price>$25.50</Price>
                            </PriceSection>
                        </Items>
                        <Items></Items>
                        <Items></Items>
                        <Items></Items>
                    </List>
                </MiddleDiv>
            </Container>
        </>
    );
}

export default RightSection;

const Container = styled.section`
    width: 30%;
    background: #000;
    padding: 20px;
`;
const TopDiv = styled.div`
    display: flex;
    justify-content: space-between;
`;
const TopRight = styled.div``;
const TopLeft = styled.div``;
const RightText = styled.h3`
    color: #fff;
    font-size: 26px;
`;
const RightName = styled.h5`
    color: #898988;
    font-size: 18px;
`;
const RightLogo = styled.div`
    background: #fff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const RightImg = styled.img``;
const MiddleDiv = styled.div``;
const List = styled.ul``;
const Items = styled.li`
    background: #2c2d2c;
    display: flex;
    justify-content: space-between;
    height: 70px;
    border-radius: 8px;
    margin-bottom: 18px;
    align-items: center;
`;
const ItemDetails = styled.div`
    display: flex;
`;
const Serial = styled.span`
    height: 24px;
    width: 24px;
    background: #fff;
    display: inline-block;
    border-radius: 50%;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const ItemName = styled.h3`
    color: #fff;
`;
const ItemCount = styled.small`
    color: #818180;
`;
const PriceSection = styled.div`
    display: flex;
`;
const Price = styled.h5`
    color: #fff;
`;
