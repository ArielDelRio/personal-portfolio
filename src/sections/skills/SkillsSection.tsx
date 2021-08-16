import React from "react";
import { Box, Center, Heading, Image, Text, VStack } from "@chakra-ui/react";
import javascript_logo from "../../images/skill_logos/javascript.svg";
import Diamond from "../../components/diamond/Diamond";
import Skills from "./Skills";

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
      <Center mt="28">
        <Box d="flex">
          <VStack
            spacing={{ base: "6", sm: "8" }}
            mt={{ base: "7.5em", sm: "10.5em" }}
            mr={{ base: "-4", sm: "-5" }}
          >
            {Skills.col1.map((skill) => (
              <Diamond
                key={skill.id}
                image_path={skill.image_path}
                skill_name={skill.name}
                rate={skill.rate}
              />
            ))}
          </VStack>
          <VStack
            spacing={{ base: "6", sm: "8" }}
            mt={{ base: "20", sm: "28" }}
            mr={{ base: "-4", sm: "-5" }}
          >
            {Skills.col2.map((skill) => (
              <Diamond
                key={skill.id}
                image_path={skill.image_path}
                skill_name={skill.name}
                rate={skill.rate}
              />
            ))}
          </VStack>
          <VStack
            spacing={{ base: "6", sm: "8" }}
            mt={{ base: "10", sm: "14" }}
            mr={{ base: "-4", sm: "-5" }}
          >
            {Skills.col3.map((skill) => (
              <Diamond
                key={skill.id}
                image_path={skill.image_path}
                skill_name={skill.name}
                rate={skill.rate}
              />
            ))}
          </VStack>
          <VStack spacing={{ base: "6", sm: "8" }}>
            {Skills.col4.map((skill) => (
              <Diamond
                key={skill.id}
                image_path={skill.image_path}
                skill_name={skill.name}
                rate={skill.rate}
              />
            ))}
          </VStack>
          <VStack
            spacing={{ base: "6", sm: "8" }}
            mt={{ base: "10", sm: "14" }}
            ml={{ base: "-4", sm: "-5" }}
          >
            {Skills.col5.map((skill) => (
              <Diamond
                key={skill.id}
                image_path={skill.image_path}
                skill_name={skill.name}
                rate={skill.rate}
              />
            ))}
          </VStack>
          <VStack
            spacing={{ base: "6", sm: "8" }}
            mt={{ base: "20", sm: "28" }}
            ml={{ base: "-4", sm: "-5" }}
          >
            {Skills.col6.map((skill) => (
              <Diamond
                key={skill.id}
                image_path={skill.image_path}
                skill_name={skill.name}
                rate={skill.rate}
              />
            ))}
          </VStack>
          <VStack
            spacing={{ base: "6", sm: "8" }}
            mt={{ base: "7.5em", sm: "10.5em" }}
            ml={{ base: "-4", sm: "-5" }}
          >
            {Skills.col7.map((skill) => (
              <Diamond
                key={skill.id}
                image_path={skill.image_path}
                skill_name={skill.name}
                rate={skill.rate}
              />
            ))}
          </VStack>
        </Box>
      </Center>
    </Box>
  );
};

export default SkillsSection;
