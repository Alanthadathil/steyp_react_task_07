import React from "react";
import styled from "styled-components";

function RightSection() {
    return (
        <>
            <Container>
                <TopContainer>
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
                </TopContainer>
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
                        <TotalDiv>
                            <TotalText>Total</TotalText>
                            <TotalPrice>$188.65</TotalPrice>
                        </TotalDiv>
                    </OrderBottom>
                    <PaymentDiv>
                        <PayTitle>Payment Method</PayTitle>
                        <PayOptions>
                            <Options>
                                <FirstOption>
                                    <PayButton>
                                        <ImgDiv>
                                            <PayImg
                                                src={
                                                    require("../../assets/images/white2.svg")
                                                        .default
                                                }
                                            />
                                        </ImgDiv>
                                    </PayButton>

                                    <OptionText>Cash</OptionText>
                                </FirstOption>

                                <SecondOption>
                                    <PayButton>
                                        <ImgDiv>
                                            <PayImg
                                                src={
                                                    require("../../assets/images/white.svg")
                                                        .default
                                                }
                                            />
                                        </ImgDiv>
                                    </PayButton>
                                    <OptionText>Debit Card</OptionText>
                                </SecondOption>
                                <ThirdOption>
                                    <PayButtonLast>
                                        <ImgDivLast>
                                            <PayImg
                                                src={
                                                    require("../../assets/images/Scan.svg")
                                                        .default
                                                }
                                            />
                                        </ImgDivLast>
                                    </PayButtonLast>
                                    <OptionText>E-wallet</OptionText>
                                </ThirdOption>
                            </Options>
                        </PayOptions>
                    </PaymentDiv>
                    <OrderButton>Place Order</OrderButton>
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const TopContainer = styled.div``;
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
    font-weight: 500;
    @media all and (max-width: 1440px) {
        font-size: 13px;
    }
    @media (max-width: 1050px) {
        width: 35%;
    }
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
    @media all and (max-width: 1440px) {
        font-size: 14px;
    }
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
    margin-top: 20px;
    color: #fff;
`;
const TotalText = styled.h3``;
const TotalPrice = styled.h3``;
const TotalDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const PaymentDiv = styled.div`
    margin-top: 164px;
`;
const PayTitle = styled.h4`
    font-size: 16px;
    color: #898988;
    margin-bottom: 12px;
    margin-left: 2px;
`;
const PayOptions = styled.div``;
const Options = styled.ul`
    display: flex;
    justify-content: center;
`;
const FirstOption = styled.li`
    margin-right: 12px;
`;
const SecondOption = styled.li`
    margin-right: 12px;
`;
const ThirdOption = styled.li`
    margin-right: 12px;
`;
const OptionText = styled.h6`
    text-align: center;
    font-size: 13px;
    margin: 8px 0 24px 0;
    color: #898988;
    @media all and (max-width: 1050px) {
        font-size: 11px;
    }
`;
const ImgDiv = styled.span`
    width: 24px;
    cursor: pointer;
    display: inline-block;
`;
const ImgDivLast = styled.span`
    width: 24px;
    display: inline-block;
    background: #fff;
`;
const PayImg = styled.img`
    width: 100%;
    display: inline-block;
`;
const OrderButton = styled.button`
    background: #fff;
    font-size: 18px;
    width: 280px;
    height: 64px;
    text-align: center;
    display: inline-block;
    border-radius: 25px;
    margin: 0 18px;
    cursor: pointer;
    &:hover {
        background: #000;
        color: #fff;
        border: 1px solid #fff;
        transition: 0.5s;
    }
    @media all and (max-width: 1280px) {
        width: 240px;
        height: 54px;
    }
    @media all and (max-width: 1050px) {
        width: 210px;
        height: 54px;
    }
`;
const PayButton = styled.button`
    border: 1px solid #fff;
    border-radius: 8px;
    padding: 12px 24px;
    @media all and (max-width: 1050px) {
        padding: 12px 18px;
    }
`;
const PayButtonLast = styled.button`
    background: #fff;
    border: 1px solid #fff;
    border-radius: 8px;
    padding: 12px 24px;
    @media all and (max-width: 1050px) {
        padding: 12px 18px;
    }
`;
