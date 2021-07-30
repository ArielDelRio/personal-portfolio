import * as React from "react";
import Navbar from "../components/navbar/Navbar";
import Section from "../components/section/Section";
import HeroSection from "./sections/HeroSection";

// markup
const IndexPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection></HeroSection>
    </div>
  );
};
export default IndexPage;
