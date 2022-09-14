import React from "react";
import styled from "styled-components";
import SearchImg from "../../assets/images/search.svg";

function MiddleSection() {
    return (
        <>
            <Container>
                <Form>
                    <Input type="text" value="" placeholder="Search" />
                    <SearchIcon src={SearchImg} />
                </Form>
                <ProductSection>
                    <TopSection>
                        <Products>
                            <Item1>
                                <ItemIcon>
                                    <Icon
                                        src={
                                            require("../../assets/images/Break-Fast.svg")
                                                .default
                                        }
                                    />
                                </ItemIcon>
                                <ItemDetails>
                                    <ItemName>Break fast</ItemName>
                                    <ItemQ>13 item</ItemQ>
                                </ItemDetails>
                            </Item1>
                            <Item2>
                                <ItemIcon>
                                    <Icon
                                        src={
                                            require("../../assets/images/soup.svg")
                                                .default
                                        }
                                    />
                                </ItemIcon>
                                <ItemDetails>
                                    <ItemName>Soup</ItemName>
                                    <ItemQ>13 item</ItemQ>
                                </ItemDetails>
                            </Item2>
                            <Item3>
                                <ItemIcon>
                                    <Icon
                                        src={
                                            require("../../assets/images/pasta.svg")
                                                .default
                                        }
                                    />
                                </ItemIcon>
                                <ItemDetails>
                                    <ItemName>pasta</ItemName>
                                    <ItemQ>13 item</ItemQ>
                                </ItemDetails>
                            </Item3>
                            <Item4>
                                <ItemIcon>
                                    <Icon
                                        src={
                                            require("../../assets/images/Sushi.svg")
                                                .default
                                        }
                                    />
                                </ItemIcon>
                                <ItemDetails>
                                    <ItemName>Sushi</ItemName>
                                    <ItemQ>13 item</ItemQ>
                                </ItemDetails>
                            </Item4>
                            <Item5>
                                <ItemIcon>
                                    <Icon
                                        src={
                                            require("../../assets/images/Main-Course.svg")
                                                .default
                                        }
                                    />
                                </ItemIcon>
                                <ItemDetails>
                                    <ItemName>Main Course</ItemName>
                                    <ItemQ>13 item</ItemQ>
                                </ItemDetails>
                            </Item5>
                            <Item6>
                                <ItemIcon>
                                    <Icon
                                        src={
                                            require("../../assets/images/Desserts.svg")
                                                .default
                                        }
                                    />
                                </ItemIcon>
                                <ItemDetails>
                                    <ItemName>Desserts</ItemName>
                                    <ItemQ>13 item</ItemQ>
                                </ItemDetails>
                            </Item6>
                            <Item7>
                                <ItemIcon>
                                    <Icon
                                        src={
                                            require("../../assets/images/Drinks.svg")
                                                .default
                                        }
                                    />
                                </ItemIcon>
                                <ItemDetails>
                                    <ItemName>Drinks</ItemName>
                                    <ItemQ>13 item</ItemQ>
                                </ItemDetails>
                            </Item7>
                            <Item8>
                                <ItemIcon>
                                    <Icon
                                        src={
                                            require("../../assets/images/Alcohol.svg")
                                                .default
                                        }
                                    />
                                </ItemIcon>
                                <ItemDetails>
                                    <ItemName>Alcohol</ItemName>
                                    <ItemQ>13 item</ItemQ>
                                </ItemDetails>
                            </Item8>
                        </Products>
                    </TopSection>
                    <BottomSection>
                        <BottomProducts>
                            <BItem1></BItem1>
                            <BItem2></BItem2>
                            <BItem3></BItem3>
                            <BItem4></BItem4>
                            <BItem5></BItem5>
                            <BItem6></BItem6>
                            <BItem7></BItem7>
                            <BItem8></BItem8>
                        </BottomProducts>
                    </BottomSection>
                </ProductSection>
            </Container>
        </>
    );
}

export default MiddleSection;

const Container = styled.section`
    width: 60%;
    background: #000;
`;

const Form = styled.form`
    padding: 28px 0;
    position: relative;
`;

const Input = styled.input`
    padding: 16px 24px;
    background: #212121;
`;
const SearchIcon = styled.img`
    position: absolute;
    left: 4px;
    width: 18px;
    color: red;
    top: 43px;
`;
const ProductSection = styled.section``;
const TopSection = styled.div`
    padding: 20px;
    border-bottom: 1px solid #fff;
`;
const Products = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    height: 350px;
`;
const Item1 = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    background: #cfdddb;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const Item2 = styled.div`
    grid-area: 1 / 2 / 2 / 3;
    background: #e5cdef;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const Item3 = styled.div`
    grid-area: 1 / 3 / 2 / 4;
    background: #c2dbe9;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const Item4 = styled.div`
    grid-area: 1 / 4 / 2 / 5;
    background: #c8cbee;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const Item5 = styled.div`
    grid-area: 2 / 1 / 3 / 2;
    background: #fbc2d8;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const Item6 = styled.div`
    grid-area: 2 / 2 / 3 / 3;
    background: #e7dbde;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const Item7 = styled.div`
    grid-area: 2 / 3 / 3 / 4;
    background: #f0c9ce;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const Item8 = styled.div`
    grid-area: 2 / 4 / 3 / 5;
    background: #c2e9df;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const ItemIcon = styled.span`
    display: inline-block;
    width: 30px;
    margin: 12px;
`;
const Icon = styled.img`
    width: 100%;
    display: inline-block;
`;
const ItemName = styled.h3`
    font-size: 24px;
    margin-bottom: 12px;
`;
const ItemDetails = styled.div`
    margin: 0 0 12px 12px;
`;
const ItemQ = styled.h5`
    font-size: 16px;
    color: #878180;
`;
const BottomSection = styled.section``;
const BottomProducts = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    height: 350px;
`;
const BItem1 = styled.div``;
const BItem2 = styled.div``;
const BItem3 = styled.div``;
const BItem4 = styled.div``;
const BItem5 = styled.div``;
const BItem6 = styled.div``;
const BItem7 = styled.div``;
const BItem8 = styled.div``;
