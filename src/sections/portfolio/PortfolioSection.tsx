import React from "react";
import { Box, Center, Heading, Image } from "@chakra-ui/react";

const PortfolioSection = () => {
  return (
    <Box minH="100vh" bg="#1D1D1D">
      <Center pt="10">
        <Heading
          id="portfolio"
          textTransform="uppercase"
          fontFamily="Roboto"
          as="h2"
          color="#fff"
          border="6px solid #fff"
          py="2"
          px="16"
        >
          Portfolio
        </Heading>
      </Center>
    </Box>
  );
};
export default PortfolioSection;
