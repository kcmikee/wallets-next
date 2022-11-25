/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import twitter from "../assets/FrontendPractical/twitter.png";
import instagram from "../assets/FrontendPractical/instagram.png";

function Footer() {
  return (
    <div className="bg-black h-[90vh] w-[100vw] text-white pt-40">
      <div className="relative h-[269px] w-[80%] mx-auto flex gap-5 mt-24">
        <p className="text-[#40D7C8] text-4xl font-medium mr-80">
          wallets{" "}
          <span className="text-white text-base ml-16 block -mt-1">
            .africa
          </span>
        </p>
        {/* About us */}
        <div className="mr-14">
          <h5 className="mt-[10px] text-lg text-white font-[Eksell]">
            About us
          </h5>
          <div className="mt-5">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#999999] text-sm"
            >
              Company
            </a>
          </div>
          <div className="mt-5">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#999999] text-sm"
            >
              FAQs
            </a>
          </div>
          <div className="mt-5">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#999999] text-sm"
            >
              Careers
            </a>
          </div>
          <div className="mt-5">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#999999] text-sm"
            >
              Blog
            </a>
          </div>
        </div>
        {/* Product */}
        <div className="mr-14">
          <h5 className="mt-[10px] text-lg text-white font-[Eksell]">
            Products
          </h5>
          <div className="mt-5">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#999999] text-sm"
            >
              For Customers
            </a>
          </div>
          <div className="mt-5">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#999999] text-sm"
            >
              For Business
            </a>
          </div>
          <div className="mt-5">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#999999] text-sm"
            >
              For Developers
            </a>
          </div>
        </div>
        {/* Legal */}
        <div className="mr-14">
          <h5 className="mt-[10px] text-lg text-white font-[Eksell]">Legal</h5>
          <div className="mt-5">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#999999] text-sm"
            >
              Privacy Policy
            </a>
          </div>
          <div className="mt-5">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#999999] text-sm"
            >
              FAQs
            </a>
          </div>
          <div className="mt-5">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#999999] text-sm"
            >
              Terms of Service
            </a>
          </div>
          <div className="mt-5">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#999999] text-sm"
            >
              Know your Customer
            </a>
          </div>
        </div>
        {/* Contact us */}
        <div>
          <h5 className="mt-[10px] text-lg text-white font-[Eksell]">
            Contact us
          </h5>
          <div className="mt-5">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#999999] text-sm"
            >
              Join our Telegrap Group
            </a>
          </div>
          <div className="mt-5">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#999999] text-sm"
            >
              Hello!
            </a>
          </div>
          <div className="mt-5">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#999999] text-sm"
            >
              Press
            </a>
          </div>
        </div>
      </div>
      <div className="mt-36 h-14 w-[75%] mx-auto flex items-center justify-between gap-4 ">
        <p className="text-sm text-[#999999]">
          © Enterprise Wallet Payments Limited
        </p>
        <div className="flex items-center gap-5">
          <img src={twitter.src} alt="twitter" className="w-4 cursor-pointer" />
          <img
            src={instagram.src}
            alt="instagram"
            className="w-4 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
