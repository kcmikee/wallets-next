import React from "react";
import styled from "styled-components";
import arrowRight from "../assets/FrontendPractical/arrowRight.png";
import PhysicalUSDCard2 from "../assets/FrontendPractical/PhysicalUSDCard2.png";
import PhysicalUSDCard from "../assets/FrontendPractical/PhysicalUSDCard.png";

function Cards() {
  const [active, setActive] = React.useState(1);
  const details = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet",
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim .`,
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet",
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim .`,
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet",
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim .`,
    },
  ];
  return (
    <Container className="">
      <div className="w-[80%] mx-auto">
        <div className="nextGen">
          <div className="dot" />
          <p>Next Generation Cards</p>
        </div>
        <div className="details flex justify-between mt-[76px]">
          <div>
            <div className="border-l-black border-l-[1px] ml-8 ">
              {details.map((card) => (
                <div
                  onClick={() => setActive(card.id)}
                  className={
                    active === card.id
                      ? `border-l-[2px] border-l-black ${
                          card.id !== 1 && "mt-14"
                        }`
                      : card.id !== 1
                      ? "mt-14"
                      : ""
                  }
                  key={card.id}
                >
                  <h1
                    className={`pl-5 text-[30px] font-[Eksell] text-black ${
                      active !== card.id && "opacity-40"
                    }`}
                  >
                    {card.title}
                  </h1>
                  <p
                    className={`pl-5 w-[407px] text-[14px] text-[#202328] font-normal ${
                      active !== card.id && "opacity-40"
                    }`}
                  >
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex items-center cursor-pointer mt-[38px] ml-12 z-20 ">
              <a href={"#33"} className="text-black font-semibold text-lg ">
                Get Started
              </a>
              <img
                src={arrowRight.src}
                alt="sub"
                className="ml-2  pointer-events-none h-[12px]"
              />
            </div>
          </div>
          <div>
            <div className="relative w-[750px] h-[502px]">
              <img
                src={PhysicalUSDCard.src}
                alt="card"
                className="h-[45%] absolute top-24 left-72 z-[1000]"
              />
              <img
                src={PhysicalUSDCard2.src}
                alt="card"
                className="absolute h-[55%] top-12 left-80 z-[1000]"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Cards;

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  background: rgb(230, 244, 247);
  .nextGen {
    margin-top: 89px;
    display: flex;
    align-items: center;
    column-gap: 1rem;
    .dot {
      width: 18px;
      height: 18px;
      background: #000000;
      border-radius: 60px;
    }
    p {
      font-family: "Eksell";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 130%;
      color: #000000;
    }
  }
`;
