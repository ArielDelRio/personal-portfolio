import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  LoadingContainer,
  SplashScreenContainer,
} from "./SplashLoading.styles";

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
        <StaticImage
          src="../../images/logo.png"
          alt="ArieldRioDev Logo"
          placeholder="none"
          loading="eager"
          layout="constrained"
          height={120}
          width={120}
        />
      </LoadingContainer>
    </SplashScreenContainer>
  );
};

export default SplashLoading;
