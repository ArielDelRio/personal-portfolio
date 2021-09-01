import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  LoadingContainer,
  SplashScreenContainer,
} from "./SplashLoading.styles";
import { Image } from "@chakra-ui/react";

interface SplashLoadingProps {
  endAnimation: boolean;
  secondsToEndAnimation: number;
}

const SplashLoading: React.FC<SplashLoadingProps> = ({
  endAnimation,
  secondsToEndAnimation,
}) => {
  return (
    <SplashScreenContainer>
      <LoadingContainer
        endAnimation={endAnimation}
        secondsToEndAnimation={secondsToEndAnimation}
      >
        <Image
          src="../../images/logo.png"
          alt="ArieldRioDev Logo"
          // placeholder="none"
          // layout="fixed"
          // height={100}
          // width={100}
        />
      </LoadingContainer>
    </SplashScreenContainer>
  );
};

export default SplashLoading;
