import React from "react";
import FloatingChat from "../floating-chat/FloatingChat";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Seo from "../seo/Seo";
import GlobalStyle from "./Layout.styles";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Seo />
      <Navbar />
      {children}
      <FloatingChat />
      <Footer />
    </>
  );
};

export default Layout;
