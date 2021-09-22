import React, { useEffect, useState } from "react";
import FloatingChat from "../floating-chat/FloatingChat";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Seo from "../seo/Seo";
import GlobalStyle from "./Layout.styles";
import SplashLoading from "../splash-loading/SplashLoading";

const maxSecondsToDelayLoading = 4;
const secondsToEndAnimation = 1;

const Layout = ({ children }) => {
  const [loading, setloading] = useState(true);
  const [endAnimation, setEndAnimation] = useState(false);

  useEffect(() => {
    if (endAnimation) {
      setTimeout(() => {
        setloading(false);
      }, secondsToEndAnimation * 1000);
    }

    const rand = Math.random() * maxSecondsToDelayLoading * 1000;
    setTimeout(() => {
      setEndAnimation(true);
    }, rand);
  }, [endAnimation]);

  return (
    <>
      <GlobalStyle />
      <Seo />
      {!loading ? (
        <>
          <Navbar />
          {children}
          <FloatingChat />
          <Footer />
        </>
      ) : (
        <SplashLoading
          endAnimation={endAnimation}
          secondsToEndAnimation={secondsToEndAnimation}
        />
      )}
    </>
  );
};

export default Layout;
