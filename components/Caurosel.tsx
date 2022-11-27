import React, { useState } from "react";
import startQuote from "../assets/FrontendPractical/startQuote.png";
import endQuote from "../assets/FrontendPractical/endQuote.png";
import arrowLeft from "../assets/FrontendPractical/arrowLeft.png";
import arrowRight2 from "../assets/FrontendPractical/arrowRight2.png";
import Carousell from "./Slide";

function Caurosel() {
  const [active, setActive] = useState(0);
  const arr = [
    {
      id: 1,
      text: ` The Wallets payroll is seamless, the cards & sub wallets allow
    us to be flexible with payments and imprest to people outside of
    the main founding team. Hands down the Wallets team is the most
    responsive and customer-centric team I have ever worked with.
    Similar to Amazon’s focus on the customer I see Wallets having
    that same outlook`,
      author: " Uzoma Ayogu",
      sub: "Co-founder, Releaf (YC S17)",
    },
    {
      id: 2,
      text: ` The Wallets payroll is seamless, the cards & sub wallets allow
      us to be flexible with payments and imprest to people outside of
      the main founding team. Hands down that same outlook`,
      author: " Jane Sterling",
      sub: "Co-founder, Releaf (YC S17)",
    },
    {
      id: 3,
      text: ` The Wallets payroll is seamless, the cards & sub wallets allow
      us to be flexible with payments and imprest to people outside of
      the main founding team. Hands down that same outlook`,
      author: "Danjuma Umar",
      sub: "Co-founder, Releaf (YC S17)",
    },
  ];

  const updateIndex = (newIndex: any) => {
    console.log(newIndex);
    if (newIndex < 0) {
      newIndex = arr.length - 1;
    } else if (newIndex >= arr.length) {
      newIndex = 0;
    }

    setActive(newIndex);
  };

  return (
    <div className="bg-black min-h-[102vh] w-[100vw] ">
      <div className="pt-[70px] w-[80%] mx-auto">
        <h1 className="mt-[10px] text-3xl text-white font-[Eksell]">
          Positive banking at your fingertips.
        </h1>
        <p className="text-white">
          We serve thousands of customers and this is what people are saying
          about us
        </p>
        <Carousell active={active} setActive={setActive}>
          {arr.map((datum) => (
            <div
              key={datum.id}
              className="text-white carousel-item relative w-[80%] flex flex-col justify-center items-center mx-auto"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              <div className="relative h-[374px] w-[80%] mx-auto flex items-center justify-center mt-20">
                <img
                  src={startQuote.src}
                  alt="star"
                  className="absolute -top-0 -left-28"
                />
                <img
                  src={endQuote.src}
                  alt="star"
                  className="absolute -bottom-0 -right-28 "
                />

                <p
                  className="text-center text-3xl w-[90%] text-[#999999] font-[Eksell]"
                  style={{ flexWrap: "wrap" }}
                >
                  {datum.text}
                </p>
              </div>
              <div className="mt-0 w-[80%] mx-auto flex items-center gap-4 ">
                <div className="bg-[#c4c4c4] w-[50px] h-[50px] rounded-full " />
                <div className="">
                  <h4 className="text-base text-white font-[Eksell]">
                    {datum.author}
                  </h4>
                  <p className="text-sm text-[#999999]">{datum.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousell>
        <div className="mt-28 h-14 w-[80%] mx-auto flex items-center justify-between gap-4 ">
          <div className="flex items-center gap-2">
            {arr.map((dot, index) => (
              <div
                key={dot.id}
                className={`h-3 w-3 rounded-full bg-gray-900 ${
                  index === active && "bg-[#fffddd]"
                }  `}
              />
            ))}
          </div>
          <div className="flex items-center gap-5">
            <div
              className="h-[40px] w-[40px] flex items-center justify-center rounded-full bg-white cursor-pointer"
              onClick={() => {
                updateIndex(active - 1);
              }}
            >
              <img src={arrowLeft.src} alt="arrow" />
            </div>
            <div
              className="h-[40px] w-[40px] flex items-center justify-center rounded-full bg-[#00C9B6] cursor-pointer"
              onClick={() => {
                updateIndex(active + 1);
              }}
            >
              <img src={arrowRight2.src} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Caurosel;
