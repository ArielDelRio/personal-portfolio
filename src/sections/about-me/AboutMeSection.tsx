import React from "react";
import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import { LogoText } from "./AboutMeSection.styles";

const AboutMeSection = () => {
  return (
    <Box minH="30vh" bg="#1D1D1D" color="white" p="10">
      <Container maxW="container.xl">
        <Heading as="h2" id="about-me" fontFamily="Roboto">
          About me
        </Heading>
        <Box
          d="flex"
          flexDirection={["column", "row"]}
          alignItems="center"
          justifyContent="space-between"
          mt={{ base: 8, sm: "auto" }}
        >
          <Text
            fontSize="large"
            mr="8"
            noOfLines={[5, 0]}
            w={{ base: "auto", sm: "80vw" }}
          >
            I am a young professional with a passion for his work and excellent
            organizational skills. With ease of adaptation to changing
            environments and clear goal orientation. I would like to develop
            professionally as a web and mobile developer.
          </Text>
          <LogoText />
        </Box>
      </Container>
    </Box>
  );
};

export default AboutMeSection;
