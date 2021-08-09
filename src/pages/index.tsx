import * as React from "react";
import { Navbar } from "../components";
import HeroSection from "./sections/HeroSection";

const IndexPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection></HeroSection>
    </div>
  );
};
export default IndexPage;
