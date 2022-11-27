import styled from "styled-components";
import bg from "../assets/FrontendPractical/bg.png";
import chevron from "../assets/FrontendPractical/chevron.png";
import chevronright from "../assets/FrontendPractical/chevronright.png";
import handCard from "../assets/FrontendPractical/handCard.png";
import bg1 from "../assets/FrontendPractical/Group.png";
import Stars from "../assets/FrontendPractical/3stars.png";
import Apple from "../assets/FrontendPractical/Apple.png";
import Playlogo from "../assets/FrontendPractical/Playlogo.png";

function Hero() {
  const links = [
    { id: 1, text: "Why us", link: "#" },
    { id: 2, text: "Products", link: "#", subLink: [] },
    { id: 3, text: "About", link: "#" },
    { id: 4, text: "Pricing", link: "#" },
  ];

  const Nav = (
    <div className="nav">
      <p className="text-[#40D7C8] text-4xl font-medium">
        wallets{" "}
        <span className="text-white text-base ml-16 block -mt-1">.africa</span>
      </p>
      <div className="linkContainer">
        <div className="w-[402px] flex items-center justify-between mr-28">
          {links.map((link) =>
            link?.subLink ? (
              <div
                key={link.id}
                className="flex items-center justify-center cursor-pointer"
              >
                <a key={link.id} href={link.text} className="text-white">
                  {link.text}
                </a>
                <img src={chevron.src} alt="sub" className="ml-2" />
              </div>
            ) : (
              <a
                key={link.id}
                href={link.text}
                className="text-white cursor-pointer"
              >
                {link.text}
              </a>
            )
          )}
        </div>
        <button>Log in</button>
      </div>
    </div>
  );

  return (
    <Container className="min-h-[100vh] relative w-full overflow-x-hidden">
      <img
        src={bg.src}
        alt="bg"
        className="absolute w-[100vw] h-[100vh] left-0 top-0 z-0 pointer-events-none"
      />
      <img
        src={bg1.src}
        alt="bg"
        className="absolute w-[100vw] h-[100vh] left-0 top-0 z-10 pointer-events-none"
      />
      {Nav}
      <div className="flex items-center justify-between w-[88%] mx-auto mt-[154px] z-20 overflow-x-hidden">
        <div className="flex flex-col justify-between">
          <div>
            <img src={Stars.src} alt="" className="pointer-events-none" />
            <h1 className="text-[75px] text-white font-[Eksell]">
              One digital wallet,{" "}
              <span className="block -mt-5">Multi Currency Cards...</span>{" "}
            </h1>
            <p className=" text-white font-normal text-2xl">
              Buy airtime, pay bills, perform money transfers and make seamless
              payments{" "}
              <span className="block ">
                everywhere from your digital wallet and with our magic VISA
                cards.
              </span>
            </p>
            <div className="flex items-center mt-[21px] gap-5 ">
              <button className="bg-[#00c9b6] w-[174px] h-[50px] text-white rounded-md">
                Get Started
              </button>
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
          <div className="flex items-center cursor-pointer mt-[180px] z-20 ">
            <a
              href={"https://"}
              className="text-white font-semibold text-lg opacity-50"
            >
              How it works
            </a>
            <img
              src={chevronright.src}
              alt="sub"
              className="ml-2 opacity-50 pointer-events-none"
            />
          </div>
        </div>
        <img
          src={handCard.src}
          alt="card"
          className="absolute -right-16 bottom-0 h-[720px] pointer-events-none"
        />
      </div>
    </Container>
  );
}

export default Hero;
const Container = styled.div`
  background: #0c0b0b;
  .nav{
    width:90%;
    height:50px;
    // background:red;
    margin 20px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo{
      height:49px;
    }
    .linkContainer{
      width:40%;
    z-index:100;

      height:50px;
      display: flex;
      align-items: center;
      justify-content: center;
      button {
        width: 174px;
        height: 50px;
        background: #00C9B6;
        border-radius: 4px;
      }
    }
  }
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
