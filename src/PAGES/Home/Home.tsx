import React from "react";
import Hero from "../../COMPONENTS/Hero/Hero";
import LatestCollections from "../../COMPONENTS/Latest Collections/LatestCollections";
import OurPolicy from "../../COMPONENTS/Our Policy/OurPolicy";
import NewsLetterBox from "../../COMPONENTS/News Letter Box/NewsLetterBox";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollections />
      <OurPolicy />
      <NewsLetterBox />
    </div>
  );
};

export default Home;
