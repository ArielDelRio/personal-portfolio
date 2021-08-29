import * as React from "react";
import { Footer, Navbar, FloatingChat, Seo } from "../components";
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
      <Seo />
      <Navbar />
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
      <FloatingChat />
      <Footer />
    </div>
  );
};
export default IndexPage;
