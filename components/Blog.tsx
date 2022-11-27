/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import phonebg from "../assets/FrontendPractical/phonebg.png";
import Phone from "../assets/FrontendPractical/Phone.png";
import Apple from "../assets/FrontendPractical/Apple.png";
import Playlogo from "../assets/FrontendPractical/Playlogo.png";

function Blog() {
  return (
    <div className="bg-white min-h-[150vh] w-[100vw] relative">
      <div className="flex items-center justify-between pt-[70px] w-[80%] relative mx-auto">
        <div>
          <h1 className="mt-[10px] text-2xl text-black font-[Eksell]">
            Our Blog
          </h1>
          <p className="text-black">
            Checkout post on what we have been up to...
          </p>
        </div>
        <a href="#" className="mt-8 text-[#5C2799]">
          View all post
        </a>
      </div>
      <div className="flex  pt-[70px] w-[80%] relative mx-auto gap-6">
        <div className="bg-[#ECFBF9] w-[50%] h-[554px] rounded-3xl " />
        <div className=" w-[50%] h-[554px]">
          <div className="bg-[#ECFBF9] h-[48%] rounded-3xl" />
          <div className="bg-[#ECFBF9] h-[48%] mt-5 rounded-3xl" />
        </div>
      </div>
      <Banner className="flex  w-[80%] relative mx-auto gap-6">
        <img
          src={phonebg.src}
          alt="bg"
          className="absolute w-[100vw] h-[100vh] left-0 top-0 z-0 pointer-events-none opacity-20"
        />
        <div className="p-16">
          <h1 className="mt-[10px] text-4xl text-white font-[Eksell]">
            Access to positive banking at your{" "}
            <span className="block">fingertips</span>
          </h1>
          <p className="text-white mt-5">
            Next-generation financial services right in your pocket.{" "}
            <span className="block">
              Download Wallets Africa on all platforms now.
            </span>
          </p>
          <div className="flex items-center mt-[21px] gap-5 ">
            <StoreContainer>
              {" "}
              <img
                src={Apple.src}
                alt="store"
                className="pointer-events-none"
              />{" "}
            </StoreContainer>
            <StoreContainer>
              {" "}
              <img
                src={Playlogo.src}
                alt="store"
                className="pointer-events-none"
              />{" "}
            </StoreContainer>
          </div>
        </div>
        <img
          src={Phone.src}
          alt="bg"
          className="absolute  right-20 bottom-0 z-0 pointer-events-none "
        />
      </Banner>
    </div>
  );
}

export default Blog;

const Banner = styled.div`
  position: absolute;
  height: 461px;
  left: 152px;
  bottom: -130px;
  background: linear-gradient(96.16deg, #00c9b6 5.99%, #5c2799 100.9%);
  border-radius: 30px;
`;

const StoreContainer = styled.div`
  width: 67px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border-radius: 4px;
  img {
    height: 24px;
  }
`;
