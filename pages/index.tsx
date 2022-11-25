import Blog from "../components/Blog";
import Cards from "../components/Cards";
import Caurosel from "../components/Caurosel";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import SmartBanking from "../components/SmartBanking";
import SwiftPayment from "../components/SwiftPayment";
import Tips from "../components/Tips";

function Home() {
  return (
    <div className="max-w-[1933px] mx-auto overflow-x-hidden">
      <Hero />
      <SwiftPayment />
      <Cards />
      <SmartBanking />
      <Tips />
      <Caurosel />
      <Blog />
      <Footer />
    </div>
  );
}

export default Home;
