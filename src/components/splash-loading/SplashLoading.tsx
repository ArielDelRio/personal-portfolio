import React from "react";
import { Box } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import { LoadingContainer } from "./SplashLoading.styles";

interface SplashLoadingProps {
  endAnimation: boolean;
  secondsToEndAnimation: number;
}

const SplashLoading: React.FC<SplashLoadingProps> = ({
  endAnimation,
  secondsToEndAnimation,
}) => {
  return (
    <Box h="100vh" display="flex" justifyContent="center" alignItems="center">
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
    </Box>
  );
};

export default SplashLoading;
