import React from "react";
import { useState } from "react";
import stars from "../assets/FrontendPractical/stars.png";

function Tips() {
  const [active, setActive] = useState(1);
  return (
    <div className="bg-[#fff] w-[100vw] flex flex-col items-center pb-[90px]">
      <h1 className="mt-[80px] text-5xl text-black font-[Eksell]">
        Positive banking at your fingertips.
      </h1>
      <div className="h-[50px] w-[238px] flex items-center bg-[#f4f4f7] mt-5 rounded-xl">
        <div
          onClick={() => setActive(1)}
          className={`h-full w-[50%] flex justify-center items-center cursor-pointer font-medium ${
            active === 1 ? "text-[#000E47] font-bold" : "#000"
          }`}
        >
          Mobile App
        </div>
        <div
          onClick={() => setActive(2)}
          className={`h-full w-[50%] flex justify-center items-center cursor-pointer font-medium ${
            active === 2 ? "text-[#000E47] font-bold" : "#000"
          }`}
        >
          Web App
        </div>
      </div>
      <div className="w-[80%] mx-auto bg-[#ecfbf9] h-[716px] rounded-3xl mt-[29px] relative">
        <img
          src={stars.src}
          alt="star"
          className="absolute top-20 -left-[60px]"
        />
        <img
          src={stars.src}
          alt="star"
          className="absolute bottom-20 -right-[35px] "
        />
      </div>
      <p className="w-[50%] my-[30px] text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim .Lorem ipsum
        dolor sit amet, consectetur adipiscing elit,{" "}
      </p>
      <button className="bg-[#00c9b6] w-[274px] h-[50px] text-white rounded-md">
        Sign up today, Win Cash Prize
      </button>
    </div>
  );
}

export default Tips;
