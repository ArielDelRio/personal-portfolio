import React from "react";
import { Box, Center, Heading } from "@chakra-ui/react";

const SkillsSection = () => {
  return (
    <Box
      minH="100vh"
      bg="radial-gradient(50% 50% at 50% 50%, rgba(26, 21, 21, 0) 0%, rgba(1, 1, 1, 0.16) 100%), #FFFFFF;"
    >
      <Center pt="10">
        <Heading
          id="skills"
          textTransform="uppercase"
          fontFamily="Roboto"
          as="h2"
          border="6px solid #000"
          py="2"
          px="16"
        >
          Skills
        </Heading>
      </Center>
    </Box>
  );
};

export default SkillsSection;
