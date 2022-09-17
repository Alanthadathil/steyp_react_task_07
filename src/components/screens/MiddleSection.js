import React, { useState } from "react";
import styled from "styled-components";
import SearchImg from "../../assets/images/search.svg";

function MiddleSection() {
    const [count, useQuentity] = useState(0);

    const Add = () => {
        useQuentity(count + 1);
    };
    const Remove = () => {
        useQuentity(count - 1);
    };

    return (
        <>
            <Container>
                <Form>
                    <Input placeholder="Search" />
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
                                    <ItemName>Soups</ItemName>
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
                            <BItem1>
                                <ItemTop>
                                    <Orders>Orders</Orders>
                                    <Arrow>
                                        <ArrowImg
                                            src={
                                                require("../../assets/images/Arrow.svg")
                                                    .default
                                            }
                                        />
                                    </Arrow>
                                    <Kitchen>Kitchen</Kitchen>
                                </ItemTop>
                                <BItemName>FIsh and Chips</BItemName>
                                <Price>$7.50</Price>
                                <ItemBottom>
                                    <Decrement onClick={() => Remove()}>
                                        <Minus
                                            src={
                                                require("../../assets/images/minus.svg")
                                                    .default
                                            }
                                        />
                                    </Decrement>
                                    <Count>{count}</Count>
                                    <Increament onClick={() => Add()}>
                                        <Plus
                                            src={
                                                require("../../assets/images/plus.svg")
                                                    .default
                                            }
                                        />
                                    </Increament>
                                </ItemBottom>
                            </BItem1>
                            <BItem2>
                                <ItemTop>
                                    <Orders>Orders</Orders>
                                    <Arrow>
                                        <ArrowImg
                                            src={
                                                require("../../assets/images/Arrow.svg")
                                                    .default
                                            }
                                        />
                                    </Arrow>
                                    <Kitchen>Kitchen</Kitchen>
                                </ItemTop>
                                <BItemName>Roast Chicken</BItemName>
                                <Price>$7.50</Price>
                                <ItemBottom>
                                    <Decrement onClick={() => Remove()}>
                                        <Minus
                                            src={
                                                require("../../assets/images/minus.svg")
                                                    .default
                                            }
                                        />
                                    </Decrement>
                                    <Count>{count}</Count>
                                    <Increament onClick={() => Add()}>
                                        <Plus
                                            src={
                                                require("../../assets/images/plus.svg")
                                                    .default
                                            }
                                        />
                                    </Increament>
                                </ItemBottom>
                            </BItem2>
                            <BItem3>
                                <ItemTop>
                                    <Orders>Orders</Orders>
                                    <Arrow>
                                        <ArrowImg
                                            src={
                                                require("../../assets/images/Arrow.svg")
                                                    .default
                                            }
                                        />
                                    </Arrow>
                                    <Kitchen>Kitchen</Kitchen>
                                </ItemTop>
                                <BItemName>Fillet Steak</BItemName>
                                <Price>$7.50</Price>
                                <ItemBottom>
                                    <Decrement onClick={() => Remove()}>
                                        <Minus
                                            src={
                                                require("../../assets/images/minus.svg")
                                                    .default
                                            }
                                        />
                                    </Decrement>
                                    <Count>{count}</Count>
                                    <Increament onClick={() => Add()}>
                                        <Plus
                                            src={
                                                require("../../assets/images/plus.svg")
                                                    .default
                                            }
                                        />
                                    </Increament>
                                </ItemBottom>
                            </BItem3>
                            <BItem4>
                                <ItemTop>
                                    <Orders>Orders</Orders>
                                    <Arrow>
                                        <ArrowImg
                                            src={
                                                require("../../assets/images/Arrow.svg")
                                                    .default
                                            }
                                        />
                                    </Arrow>
                                    <Kitchen>Kitchen</Kitchen>
                                </ItemTop>
                                <BItemName>Beafsteak</BItemName>
                                <Price>$7.50</Price>
                                <ItemBottom>
                                    <Decrement onClick={() => Remove()}>
                                        <Minus
                                            src={
                                                require("../../assets/images/minus.svg")
                                                    .default
                                            }
                                        />
                                    </Decrement>
                                    <Count>{count}</Count>
                                    <Increament onClick={() => Add()}>
                                        <Plus
                                            src={
                                                require("../../assets/images/plus.svg")
                                                    .default
                                            }
                                        />
                                    </Increament>
                                </ItemBottom>
                            </BItem4>
                            <BItem5>
                                <ItemTop>
                                    <Orders>Orders</Orders>
                                    <Arrow>
                                        <ArrowImg
                                            src={
                                                require("../../assets/images/Arrow.svg")
                                                    .default
                                            }
                                        />
                                    </Arrow>
                                    <Kitchen>Kitchen</Kitchen>
                                </ItemTop>
                                <BItemName>Roast Beef</BItemName>
                                <Price>$7.50</Price>
                                <ItemBottom>
                                    <Decrement onClick={() => Remove()}>
                                        <Minus
                                            src={
                                                require("../../assets/images/minus.svg")
                                                    .default
                                            }
                                        />
                                    </Decrement>
                                    <Count>{count}</Count>
                                    <Increament onClick={() => Add()}>
                                        <Plus
                                            src={
                                                require("../../assets/images/plus.svg")
                                                    .default
                                            }
                                        />
                                    </Increament>
                                </ItemBottom>
                            </BItem5>
                            <BItem6>
                                <ItemTop>
                                    <Orders>Orders</Orders>
                                    <Arrow>
                                        <ArrowImg
                                            src={
                                                require("../../assets/images/Arrow.svg")
                                                    .default
                                            }
                                        />
                                    </Arrow>
                                    <Kitchen>Kitchen</Kitchen>
                                </ItemTop>
                                <BItemName>Buffello Wings</BItemName>
                                <Price>$7.50</Price>
                                <ItemBottom>
                                    <Decrement onClick={() => Remove()}>
                                        <Minus
                                            src={
                                                require("../../assets/images/minus.svg")
                                                    .default
                                            }
                                        />
                                    </Decrement>
                                    <Count>{count}</Count>
                                    <Increament onClick={() => Add()}>
                                        <Plus
                                            src={
                                                require("../../assets/images/plus.svg")
                                                    .default
                                            }
                                        />
                                    </Increament>
                                </ItemBottom>
                            </BItem6>
                            <BItem7>
                                <ItemTop>
                                    <Orders>Orders</Orders>
                                    <Arrow>
                                        <ArrowImg
                                            src={
                                                require("../../assets/images/Arrow.svg")
                                                    .default
                                            }
                                        />
                                    </Arrow>
                                    <Kitchen>Kitchen</Kitchen>
                                </ItemTop>
                                <BItemName>Lobster</BItemName>
                                <Price>$7.50</Price>
                                <ItemBottom>
                                    <Decrement onClick={() => Remove()}>
                                        <Minus
                                            src={
                                                require("../../assets/images/minus.svg")
                                                    .default
                                            }
                                        />
                                    </Decrement>
                                    <Count>{count}</Count>
                                    <Increament onClick={() => Add()}>
                                        <Plus
                                            src={
                                                require("../../assets/images/plus.svg")
                                                    .default
                                            }
                                        />
                                    </Increament>
                                </ItemBottom>
                            </BItem7>
                            <BItem8>
                                <ItemTop>
                                    <Orders>Orders</Orders>
                                    <Arrow>
                                        <ArrowImg
                                            src={
                                                require("../../assets/images/Arrow.svg")
                                                    .default
                                            }
                                        />
                                    </Arrow>
                                    <Kitchen>Kitchen</Kitchen>
                                </ItemTop>
                                <BItemName>Red Cavier</BItemName>
                                <Price>$7.50</Price>
                                <ItemBottom>
                                    <Decrement onClick={() => Remove()}>
                                        <Minus
                                            src={
                                                require("../../assets/images/minus.svg")
                                                    .default
                                            }
                                        />
                                    </Decrement>
                                    <Count>{count}</Count>
                                    <Increament onClick={() => Add()}>
                                        <Plus
                                            src={
                                                require("../../assets/images/plus.svg")
                                                    .default
                                            }
                                        />
                                    </Increament>
                                </ItemBottom>
                            </BItem8>
                        </BottomProducts>
                    </BottomSection>
                </ProductSection>
                <BottomCountSec>
                    <CountFisrt>
                        <TButton1>T4</TButton1>
                        <CountName>Leslie K.</CountName>
                        <CountNameDiv>
                            <Orders>{count} items</Orders>
                            <Arrow>
                                <ArrowImg
                                    src={
                                        require("../../assets/images/Arrow.svg")
                                            .default
                                    }
                                    CountNameDiv
                                />
                            </Arrow>
                            <Kitchen>Kitchen</Kitchen>
                        </CountNameDiv>
                    </CountFisrt>
                    <CountSecond>
                        <TButton2>T2</TButton2>
                        <CountName>Leslie K.</CountName>
                        <CountNameDiv>
                            <Orders>{count} items</Orders>
                            <Arrow>
                                <ArrowImg
                                    src={
                                        require("../../assets/images/Arrow.svg")
                                            .default
                                    }
                                    CountNameDiv
                                />
                            </Arrow>
                            <Kitchen>Kitchen</Kitchen>
                        </CountNameDiv>
                    </CountSecond>
                    <CountThird>
                        <TButton3>T4</TButton3>
                        <CountName>Leslie K.</CountName>
                        <CountNameDiv>
                            <Orders>{count} items</Orders>
                            <Arrow>
                                <ArrowImg
                                    src={
                                        require("../../assets/images/Arrow.svg")
                                            .default
                                    }
                                    CountNameDiv
                                />
                            </Arrow>
                            <Kitchen>Kitchen</Kitchen>
                        </CountNameDiv>
                    </CountThird>
                </BottomCountSec>
            </Container>
        </>
    );
}

export default MiddleSection;

const Container = styled.section`
    width: 70%;
    background: #000;
    @media all and (max-width: 640px) {
        width: 100%;
    }
`;

const Form = styled.form`
    padding-top: 28px;
    padding-left: 20px;
    position: relative;
`;

const Input = styled.input`
    padding: 16px 26px;
    background: #212121;
    color: #fff;
    font-size: 16px;
    @media all and (max-width: 980px) {
        padding: 11px 26px;
    }
`;
const SearchIcon = styled.img`
    position: absolute;
    left: 22px;
    width: 18px;
    color: red;
    top: 43px;
`;
const ProductSection = styled.section``;
const TopSection = styled.div`
    padding: 20px;
    border-bottom: 1px solid #404141;
`;
const Products = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    @media all and (max-width: 1280px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(4, 1fr);
    } ;
`;
const Item1 = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    background: #cfdddb;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media all and (max-width: 1280px) {
        grid-area: 1 / 1 / 2 / 2;
    } ;
`;
const Item2 = styled.div`
    grid-area: 1 / 2 / 2 / 3;
    background: #e5cdef;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media all and (max-width: 1280px) {
        grid-area: 1 / 2 / 2 / 3;
    } ;
`;
const Item3 = styled.div`
    grid-area: 1 / 3 / 2 / 4;
    background: #c2dbe9;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media all and (max-width: 1280px) {
        grid-area: 2 / 1 / 3 / 2;
    } ;
`;
const Item4 = styled.div`
    grid-area: 1 / 4 / 2 / 5;
    background: #c8cbee;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media all and (max-width: 1280px) {
        grid-area: 2 / 2 / 3 / 3;
    } ;
`;
const Item5 = styled.div`
    grid-area: 2 / 1 / 3 / 2;
    background: #fbc2d8;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media all and (max-width: 1280px) {
        grid-area: 3 / 1 / 4 / 2;
    } ;
`;
const Item6 = styled.div`
    grid-area: 2 / 2 / 3 / 3;
    background: #e7dbde;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media all and (max-width: 1280px) {
        grid-area: 3 / 2 / 4 / 3;
    } ;
`;
const Item7 = styled.div`
    grid-area: 2 / 3 / 3 / 4;
    background: #f0c9ce;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media all and (max-width: 1280px) {
        grid-area: 4 / 1 / 5 / 2;
    } ;
`;
const Item8 = styled.div`
    grid-area: 2 / 4 / 3 / 5;
    background: #c2e9df;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media all and (max-width: 1280px) {
        grid-area: 4 / 2 / 5 / 3;
    }
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
    font-size: 22px;
    margin-bottom: 12px;
    font-family: "Poppins";
    font-weight: 500;
`;
const ItemDetails = styled.div`
    margin: 0 0 12px 12px;
`;
const ItemQ = styled.h5`
    font-size: 16px;
    color: #878180;
`;
const BottomSection = styled.section`
    padding: 20px 20px 34px 20px;
`;
const BottomProducts = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    @media all and (max-width: 1280px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(4, 1fr);
    }
    @media all and (max-width: 480px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(8, 1fr);
    }
`;
const BItem1 = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    background: #2c2c2d;
    border-radius: 8px;
    cursor: pointer;
    padding: 12px;
    @media all and (max-width: 1280px) {
        grid-area: 1 / 1 / 2 / 2;
    }
    @media all and (max-width: 480px) {
        grid-area: 1 / 1 / 2 / 2;
    }
`;
const BItem2 = styled.div`
    grid-area: 1 / 2 / 2 / 3;
    background: #2c2c2d;
    border-radius: 8px;
    cursor: pointer;
    padding: 12px;
    @media all and (max-width: 1280px) {
        grid-area: 1 / 2 / 2 / 3;
    }
    @media all and (max-width: 480px) {
        grid-area: 2 / 1 / 3 / 2;
    }
`;
const BItem3 = styled.div`
    grid-area: 1 / 3 / 2 / 4;
    background: #2c2c2d;
    border-radius: 8px;
    cursor: pointer;
    padding: 12px;
    @media all and (max-width: 1280px) {
        grid-area: 2 / 1 / 3 / 2;
    } ;
`;
const BItem4 = styled.div`
    grid-area: 1 / 4 / 2 / 5;
    background: #2c2c2d;
    border-radius: 8px;
    cursor: pointer;
    padding: 12px;
    @media all and (max-width: 1280px) {
        grid-area: 2 / 2 / 3 / 3;
    } ;
`;
const BItem5 = styled.div`
    grid-area: 2 / 1 / 3 / 2;
    background: #2c2c2d;
    border-radius: 8px;
    cursor: pointer;
    padding: 12px;
    @media all and (max-width: 1280px) {
        grid-area: 3 / 1 / 4 / 2;
    } ;
`;
const BItem6 = styled.div`
    grid-area: 2 / 2 / 3 / 3;
    background: #2c2c2d;
    border-radius: 8px;
    cursor: pointer;
    padding: 12px;
    @media all and (max-width: 1280px) {
        grid-area: 3 / 2 / 4 / 3;
    } ;
`;
const BItem7 = styled.div`
    grid-area: 2 / 3 / 3 / 4;
    background: #2c2c2d;
    border-radius: 8px;
    cursor: pointer;
    padding: 12px;
    @media all and (max-width: 1280px) {
        grid-area: 4 / 1 / 5 / 2;
    } ;
`;
const BItem8 = styled.div`
    grid-area: 2 / 4 / 3 / 5;
    background: #2c2c2d;
    border-radius: 8px;
    cursor: pointer;
    padding: 12px;
    @media all and (max-width: 1280px) {
        grid-area: 4 / 2 / 5 / 3;
    } ;
`;
const ItemTop = styled.div`
    display: flex;
    align-items: center;
    color: #909091;
    margin-bottom: 12px;
`;
const Orders = styled.span`
    color: #909091;
    font-size: 16px;
`;
const Arrow = styled.span`
    display: inline-block;
    width: 18px;
    margin: 6px 12px 0;
`;
const ArrowImg = styled.img`
    display: inline-block;
    width: 100%;
`;
const Kitchen = styled.span`
    color: #909091;
    font-size: 16px;
`;
const BItemName = styled.h3`
    font-size: 18px;
    color: #fff;
    margin-bottom: 8px;
    font-weight: 500;
`;
const Price = styled.h5`
    color: #909091;
    font-size: 16px;
`;
const ItemBottom = styled.div`
    display: flex;
    align-items: center;
    margin-top: 24px;
    padding: 6px 8px;
    justify-content: end;
`;
const Plus = styled.img`
    display: inline-block;
    width: 100%;
`;
const Count = styled.small`
    color: #fff;
    font-size: 16px;
    margin: 0 12px;
`;
const Increament = styled.span`
    display: inline-block;
    border: 1px solid #909091;
    padding: 3px 6px;
    border-radius: 8px;
`;
const Decrement = styled.span`
    display: inline-block;
    border: 1px solid #909091;
    padding: 3px 6px;
    border-radius: 8px;
`;
const Minus = styled.img`
    display: inline-block;
    width: 100%;
`;
const BottomCountSec = styled.section`
    display: flex;
    border-top: 1px solid #909091;
    @media all and (max-width: 640px) {
    }
`;
const CountFisrt = styled.div`
    border-right: 1px solid #909091;
    display: flex;
    align-items: center;
    width: 33.3%;
    flex-wrap: wrap;
    padding-top: 20px;
`;
const CountSecond = styled.div`
    border-right: 1px solid #909091;
    display: flex;
    align-items: center;
    width: 33.3%;
    flex-wrap: wrap;
    padding-top: 20px;
`;
const CountThird = styled.div`
    display: flex;
    align-items: center;
    width: 33.3%;
    flex-wrap: wrap;
    padding-top: 20px;
`;
const TButton1 = styled.span`
    background: #c8cbee;
    display: inline-block;
    border-radius: 4px;
    padding: 12px 14px;
    margin-left: 20px;
    font-size: 24px;
    color: #000;
    @media all and (max-width: 768px) {
        padding: 6px 10px;
    }
`;
const TButton2 = styled.span`
    background: #3e3e3e;
    display: inline-block;
    border-radius: 4px;
    padding: 12px 14px;
    margin-left: 20px;
    font-size: 24px;
    color: #fff;
    @media all and (max-width: 768px) {
        padding: 6px 10px;
    }
`;
const TButton3 = styled.span`
    background: #2c2d2c;
    display: inline-block;
    border-radius: 4px;
    padding: 12px 14px;
    margin-left: 20px;
    font-size: 24px;
    color: #fff;
    @media all and (max-width: 768px) {
        padding: 6px 10px;
    }
`;
const CountName = styled.h4`
    color: #fff;
    margin-left: 18px;
    @media all and (max-width: 768px) {
        font-size: 14px;
    }
`;
const CountNameDiv = styled.div`
    display: flex;
    align-items: center;
    padding-left: 20px;
    @media all and (max-width: 1280px) {
        flex-wrap: wrap;
    }
`;
