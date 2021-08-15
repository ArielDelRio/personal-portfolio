import React from "react";
import { Box, Center, Heading, Image, Text } from "@chakra-ui/react";
import javascript_logo from "../../images/skill_logos/javascript.svg";
import react_logo from "../../images/skill_logos/react.svg";
import Diamond from "../../components/diamond/Diamond";

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
      <Center>
        <Box mt="12">
          <Diamond
            image_path={javascript_logo}
            skill_name="Javascript"
            rate={4.5}
          />
          <Diamond image_path={react_logo} skill_name="React" rate={4.5} />
          {/* <Box
            w="24"
            h="24"
            mb="10"
            bg="#C4C4C4"
            transform="rotate(45deg);"
            cursor="pointer"
          ></Box>
          <Box
            w="24"
            h="24"
            mb="10"
            bg="#C4C4C4"
            transform="rotate(45deg);"
            cursor="pointer"
          ></Box>
          <Box
            w="24"
            h="24"
            mb="10"
            bg="#C4C4C4"
            transform="rotate(45deg);"
            cursor="pointer"
          ></Box>
        </Box>  */}
        </Box>
      </Center>
    </Box>
  );
};

export default SkillsSection;
