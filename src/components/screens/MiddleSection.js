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
                {/* <ProductSection>
                    <TopSection>
                        <Products>
                            <Items></Items>
                        </Products>
                    </TopSection>
                    <BottomSection></BottomSection>
                </ProductSection> */}
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
