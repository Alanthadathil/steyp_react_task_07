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
                        <Items>
                            <ItemDetails>
                                <Serial>2</Serial>
                                <ItemName>Red caviar</ItemName>
                                <ItemCount>x3</ItemCount>
                            </ItemDetails>
                            <PriceSection>
                                <Price>$36.50</Price>
                            </PriceSection>
                        </Items>
                        <Items>
                            <ItemDetails>
                                <Serial>3</Serial>
                                <ItemName>German sausage</ItemName>
                                <ItemCount>x1</ItemCount>
                            </ItemDetails>
                            <PriceSection>
                                <Price>$25.50</Price>
                            </PriceSection>
                        </Items>
                        <Items>
                            <ItemDetails>
                                <Serial>4</Serial>
                                <ItemName>Irish cream coffee</ItemName>
                                <ItemCount>x1</ItemCount>
                            </ItemDetails>
                            <PriceSection>
                                <Price>$4.50</Price>
                            </PriceSection>
                        </Items>
                    </List>
                </MiddleDiv>
                <BottomDiv>
                    <OrderTop>
                        <OrderLeft>
                            <FirstText>Subtotal</FirstText>
                            <SecondText>Tax 10%</SecondText>
                        </OrderLeft>
                        <OrderRight>
                            <FirstPrice>$171.50</FirstPrice>
                            <SecondPrice>$17.15</SecondPrice>
                        </OrderRight>
                    </OrderTop>
                    <OrderBottom>
                        <TotalText>Total</TotalText>
                        <TotalPrice>$188.65</TotalPrice>
                    </OrderBottom>
                </BottomDiv>
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
    margin-bottom: 20px;
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
const MiddleDiv = styled.div`
    margin-bottom: 28px;
`;
const List = styled.ul``;
const Items = styled.li`
    background: #2c2d2c;
    display: flex;
    justify-content: space-between;
    height: 70px;
    border-radius: 8px;
    margin-bottom: 8px;
    align-items: center;
    padding: 20px;
`;
const ItemDetails = styled.div`
    display: flex;
    align-items: center;
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
    margin-right: 12px;
`;
const ItemName = styled.h3`
    color: #fff;
    margin-right: 12px;
    font-size: 18px;
`;
const ItemCount = styled.small`
    color: #818180;
`;
const PriceSection = styled.div`
    display: flex;
`;
const Price = styled.h5`
    color: #fff;
    font-size: 16px;
`;
const BottomDiv = styled.div`
    background: #2c2d2c;
    border-radius: 8px;
    padding: 20px;
`;
const OrderTop = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px dashed #fff;
`;
const FirstText = styled.h3`
    color: #fff;
    font-size: 18px;
    margin-bottom: 18px;
`;
const SecondText = styled.h3`
    color: #fff;
    font-size: 18px;
    margin-bottom: 18px;
`;
const OrderLeft = styled.div``;
const OrderRight = styled.div``;
const FirstPrice = styled.h5`
    color: #fff;
    font-size: 18px;
    margin-bottom: 18px;
`;
const SecondPrice = styled.h5`
    color: #fff;
    font-size: 18px;
    margin-bottom: 18px;
`;
const OrderBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    margin-top: 20px;
`;
const TotalText = styled.h3``;
const TotalPrice = styled.h3``;
