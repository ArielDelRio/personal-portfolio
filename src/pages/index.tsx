import * as React from "react";
import { Navbar } from "../components";
import {
  HeroSection,
  AboutMeSection,
  SkillsSection,
  PortfolioSection,
  ContactSection,
} from "../sections";

const IndexPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
};
export default IndexPage;
