import * as React from "react";
import { Navbar } from "../components";
import {
  HeroSection,
  AboutMeSection,
  SkillsSection,
  PersonalPortfolio,
} from "../sections";

const IndexPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <PersonalPortfolio />
    </div>
  );
};
export default IndexPage;
