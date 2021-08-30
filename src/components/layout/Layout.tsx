import React, { useEffect, useState } from "react";
import FloatingChat from "../floating-chat/FloatingChat";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Seo from "../seo/Seo";
import GlobalStyle from "./Layout.styles";
import SplashLoading from "../splash-loading/SplashLoading";

const Layout = ({ children }) => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const rand = Math.random() * 1000;
    console.log(rand);
    setTimeout(() => {
      setloading(false);
    }, rand);
  }, []);

  return (
    <>
      <GlobalStyle />
      {!loading ? (
        <>
          <Seo />
          <Navbar />
          {children}
          <FloatingChat />
          <Footer />
        </>
      ) : (
        <SplashLoading />
      )}
    </>
  );
};

export default Layout;
