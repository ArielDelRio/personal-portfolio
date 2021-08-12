import * as React from "react";
import { Navbar } from "../components";
import { HeroSection, AboutMeSection } from "../sections";

const IndexPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutMeSection />
    </div>
  );
};
export default IndexPage;
