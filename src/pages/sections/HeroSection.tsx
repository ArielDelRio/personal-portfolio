import React from "react";
import { Box, Flex, Text, Code } from "@chakra-ui/react";
import Typical from "react-typical";
import { TagText } from "../../components";

const HeroSection = () => {
  return (
    <Flex
      display="flex"
      minHeight="100vh"
      flexDirection={{ base: "column", md: "row" }}
      bgColor="#E5E5E5"
    >
      <Box
        flex="1"
        d="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        minHeight={{ base: "50vh", md: "100vh" }}
        maxWidth={{ base: "100vw", md: "50vw" }}
        bgColor="#E5E5E5"
        fontFamily="Roboto"
      >
        <Text
          fontSize={["xx-large"]}
          fontWeight="bold"
          textAlign={["left"]}
          mt="4"
        >
          Hi, it's me
          <Text fontSize={["5xl"]} fontFamily="cursive">Ariel Del Rio</Text>
        </Text>
        <Text
          fontSize="x-large"
          fontWeight="bold"
          textAlign="center"
          color="blackAlpha.500"
          mt="-4"
          mx="5"
        >
          Full-Stack Developer based on JS Technologies
        </Text>
        <Box d="inline-flex" alignItems="baseline" fontSize={["x-large"]}>
          <TagText value="code">
            <Text fontFamily="cursive" color="gray.600">
              <Typical
                steps={[
                  "I'm a programmer 💻",
                  2000,
                  "I'm a designer 🤹‍♂️",
                  2000,
                  "I'm a pet lover 🐶",
                  3000,
                ]}
                loop={Infinity}
                wrapper="p"
              />
            </Text>
          </TagText>
        </Box>
      </Box>
      <Box
        flex="2"
        minHeight={{ base: "50vh", md: "100vh" }}
        maxWidth={{ base: "100vw", md: "50vw" }}
        bgColor="#000"
        borderTop={{ base: "8vw solid #E5E5E5", md: "none" }}
        borderRight={{ base: "100vw solid transparent", md: "none" }}
        borderLeft={{ md: "8vw solid #E5E5E5" }}
        borderBottom={{ md: "100vh solid transparent" }}
      ></Box>
    </Flex>
  );
};

export default HeroSection;
