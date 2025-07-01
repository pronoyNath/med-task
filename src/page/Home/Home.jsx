import React from "react";
import Navbar from "../../sharedCompnonets/Navbar";
import Banner from "../../components/Home/Banner";
import Partners from "../../components/Partners";
import Services from "../../components/Services";
import Medical from "../../components/Home/Medical";
import Footer from "../../sharedCompnonets/Footer";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <div className="bg-[#F2F7FF] ">
        <div className="px-5 lg:px-16 container mx-auto">
        <Navbar />
        <Banner />
        </div>
      </div>
      <div>
        <Partners />
        <div className="bg-[#F9FCFC]">
        <Services/>
        <Medical/>
        </div>
        <Footer/>
        {/* <div className="min-h-screen bg-yellow-300"></div> */}
      </div>
    </div>
  );
};

export default Home;
