import React from "react";
import styled from "styled-components";
import bg from "../assets/FrontendPractical/cardholding.png";

function SwiftPayment() {
  return (
    <Container className="">
      <h1 className="mt-[60px] text-center text-[50px] text-black font-[Eksell]">
        Designed for swift payments, transparency,{" "}
        <span className="block">and instant settlement</span>
      </h1>
    </Container>
  );
}

export default SwiftPayment;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  background-image: url(${bg.src});
  background-repeat: no-repeat;
  background-size: cover;
`;
