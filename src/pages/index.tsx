import * as React from "react";
import { Navbar } from "../components";
import { HeroSection, AboutMeSection, SkillsSection } from "../sections";

const IndexPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
    </div>
  );
};
export default IndexPage;
