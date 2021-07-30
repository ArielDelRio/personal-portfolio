import { Container, Box, Flex, Square } from "@chakra-ui/react";
import React from "react";
import Content from "./HeroSection.style";

const HeroSection = () => {
  return (
    <Flex display="flex" minHeight="100vh" bgColor="#E5E5E5">
      <Box flex="1" minHeight="100vh" maxWidth="50vw" bgColor="#E5E5E5"></Box>
      <Box
        flex="2"
        rotate="(187deg)"
        minHeight="100vh"
        maxWidth="50vw"
        bgColor="#000"
      ></Box>
    </Flex>
  );
};

export default HeroSection;
