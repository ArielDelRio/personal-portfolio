import React from "react";
import { Box, Center, Heading, Image, transform } from "@chakra-ui/react";
import javascript_logo from "../../images/skill_logos/javascript.svg";

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
        <Box mt="32">
          <Box
            className="flip-card"
            w="24"
            h="24"
            mb="10"
            bg="transparent"
            transform="rotate(45deg);"
            cursor="pointer"
            style={{ perspective: "1000px" }}
          >
            <Box
              className="flip-card-inner"
              position="relative"
              w="100%"
              h="100%"
              transition="transform 0.8s"
              _hover={{ transform: "rotateY(180deg)" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Box
                className="flip-card-front"
                position="absolute"
                w="100%"
                h="100%"
                bg="#C4C4C4"
                style={{ backfaceVisibility: "hidden" }}
              >
                <Center h="100%">
                  <Image
                    src={javascript_logo}
                    alt="javascript logo"
                    boxSize="14"
                    transform="rotate(-45deg);"
                  />
                </Center>
              </Box>
              <Box
                className="flip-card-back"
                position="absolute"
                w="100%"
                h="100%"
                bg="linear-gradient(271deg, #C4C4C4 -1.98%, rgba(196, 196, 196, 0) 96.46%);"
                style={{ backfaceVisibility: "hidden" }}
                transform="rotateY(180deg);"
              >
                back
              </Box>
            </Box>
          </Box>
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
          <Box
            w="24"
            h="24"
            mb="10"
            bg="#C4C4C4"
            transform="rotate(45deg);"
            cursor="pointer"
          ></Box>
        </Box>
      </Center>
    </Box>
  );
};

export default SkillsSection;
