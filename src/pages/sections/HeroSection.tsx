import { Container, Box, Flex, Square } from "@chakra-ui/react";
import React from "react";

const HeroSection = () => {
  return (
    <Flex display="flex" minHeight="100vh" bgColor="#E5E5E5">
      <Box flex="1" minHeight="100vh" maxWidth="40vw" bgColor="#E5E5E5"></Box>
      <Box
        flex="2"
        minHeight="100vh"
        maxWidth="60vw"
        bgColor="#000"
        borderLeft={{base: "100vw solid #E5E5E5", sm: "10vw solid #E5E5E5"}}
        borderBottom="100vh solid transparent"
      ></Box>
    </Flex>
  );
};

export default HeroSection;
