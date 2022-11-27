import React from "react";
import styled from "styled-components";
import phone1 from "../assets/FrontendPractical/phone1.png";

function SmartBanking() {
  return (
    <Container>
      <div className="w-[80%] mx-auto flex justify-between relative">
        <div>
          <h1 className="mt-[140px] text-5xl text-white font-[Eksell]">
            Smart banking with{" "}
            <span className="block"> transparent and cheaper </span>
            fees...
          </h1>
          <LetterBox />
          <div className="flex items-center gap-4">
            <LetterBox />
            <LetterBox />
          </div>
        </div>

        <img
          src={phone1.src}
          alt="phone"
          className="absolute h-[90vh] -bottom-24 -right-36"
        />
      </div>
    </Container>
  );
}

export default SmartBanking;

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  background: #3b1e62;
`;

function LetterBox() {
  return (
    <div className="w-[350px] mt-16">
      <div className="w-[34px] h-[34px] bg-[#764824] " />
      <h1 className="text-2xl my-2 text-[#fff] font-[Eksell]">
        Smart banking with{" "}
      </h1>
      <p className="text-[#b1a5c0]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </p>
    </div>
  );
}
