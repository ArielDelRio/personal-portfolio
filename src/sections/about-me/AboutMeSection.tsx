import React, { useState } from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { Avatar } from "./AboutMeSection.styles";

const AboutMeSection = () => {
  const [active, setActive] = useState(true);

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
            noOfLines={[5, 0]}
            w={{ base: "auto", sm: "80vw" }}
          >
            I am a young professional with a passion for his work and excellent
            organizational skills. With ease of adaptation to changing
            environments and clear goal orientation. I would like to develop
            professionally as a web and mobile developer.
          </Text>
          <Avatar active={active} onClick={() => setActive(!active)} />
        </Box>
      </Container>
    </Box>
  );
};

export default AboutMeSection;
