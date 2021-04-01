import React from "react";
import Footer from "../sections/Footer";
import RandomJobs from "../sections/RandomJobs";
import HowitWorks from "../sections/HowitWoks";
import HomeHeader from "../sections/Header"
import DownloadApp from "../components/DownloadApp";

import BlogPost from "../sections/BlogPost";
const Home = () => {
  return (
    <>
      <HomeHeader/>
      <RandomJobs />
      <HowitWorks />
      <DownloadApp />
      <Footer />
    </>
  );
};
export default Home;
