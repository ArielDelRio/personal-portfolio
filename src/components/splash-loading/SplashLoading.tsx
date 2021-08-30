import { Box, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../../images/logo.png";

const SplashLoading = () => {
  return (
    <Box h="100vh" display="flex" justifyContent="center" alignItems="center">
      <Box
        className="zoom-in-out"
        shadow="md"
        bg="gray.400"
        borderRadius="5px"
        p="4"
      >
        <Image src={logo} alt="ArieldRioDev Logo" boxSize="28" />
      </Box>
    </Box>
  );
};

export default SplashLoading;
