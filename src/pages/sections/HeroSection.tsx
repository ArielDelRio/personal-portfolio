import React, { useRef } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Icon,
  useMediaQuery,
} from "@chakra-ui/react";
import Typical from "react-typical";
import { TagText } from "../../components";
import { FaAt, FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "gatsby";
import Pana from "../../assets/pana.svg";

const HeroSection = () => {
  const [isLargerThan767] = useMediaQuery("(min-width: 767px)");

  return (
    <Flex
      display="flex"
      maxHeight="100vh"
      flexDirection={{ base: "column", md: "row" }}
    >
      <Box
        d="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        minHeight={{ base: "60vh", md: "100vh" }}
        minWidth={{ base: "100vw", md: "calc(50vw - 40px)" }}
        bgColor="#E5E5E5"
        fontFamily="Roboto"
      >
        <Box mt="14">
          <Text
            fontSize={{ base: "3xl", md: "xx-large" }}
            fontWeight="bold"
            textAlign={["left"]}
          >
            Hi, it's me
          </Text>
          <Text
            fontSize={{ base: "3xl", md: "5xl" }}
            mt="-2"
            fontFamily="cursive"
          >
            Ariel Del Rio
          </Text>
        </Box>
        <Text
          fontSize={{ base: "large", md: "x-large" }}
          fontWeight="bold"
          textAlign="center"
          color="blackAlpha.500"
          mt="-2"
          mx="5"
        >
          Full-Stack Developer based on JS Technologies
        </Text>
        <Box
          d="inline-flex"
          alignItems="baseline"
          fontSize={{ base: "large", md: "x-large" }}
        >
          <TagText value="code">
            <Text fontFamily="cursive" color="gray.600">
              I'm a{" "}
              <Typical
                steps={
                  useRef([
                    "programmer 💻",
                    1000,
                    "designer 🤹‍♂️",
                    1000,
                    "pet lover 🐶",
                    1000,
                  ]).current
                }
                loop={Infinity}
                wrapper="b"
              />
            </Text>
          </TagText>
        </Box>
        <Box d="flex" flexDirection="column" pt="8">
          <Stack direction="row" spacing={4}>
            <Link to="#">
              <Button
                bg="blackAlpha.400"
                color="black"
                variant="solid"
                shadow="md"
                borderBottom="2px"
                borderColor="blackAlpha.600"
              >
                <Icon as={FaAt} w={6} h={6} />
              </Button>
            </Link>
            <Link to="#">
              <Button
                bg="blackAlpha.400"
                color="black"
                variant="solid"
                shadow="md"
                borderBottom="2px"
                borderColor="blackAlpha.600"
              >
                <Icon as={FaGithub} w={6} h={6} />
              </Button>
            </Link>
            <Link to="#">
              <Button
                bg="blackAlpha.400"
                color="black"
                variant="solid"
                shadow="md"
                borderBottom="2px"
                borderColor="blackAlpha.600"
              >
                <Icon as={FaLinkedin} w={6} h={6} />
              </Button>
            </Link>
          </Stack>
          <Button
            w="28"
            h="12"
            mt="4"
            alignSelf="center"
            bg="black"
            color="whiteAlpha.900"
            variant="solid"
            shadow="md"
            borderBottom="2px"
            borderColor="blackAlpha.600"
            rightIcon={<FaFileDownload />}
            fontWeight="medium"
            _hover={{
              background: "white",
              color: "black",
            }}
          >
            Resume
          </Button>
        </Box>
      </Box>
      <Box
        bgColor="#000"
        minWidth={{ base: "100vw", md: "50vw" }}
        minHeight={{ base: "40vh", md: "100vh" }}
        borderTop={{ base: "8vw solid #E5E5E5", md: "none" }}
        borderRight={{ base: "100vw solid transparent", md: "none" }}
        borderLeft={{ md: "8vw solid #E5E5E5" }}
        borderBottom={{ md: "100vh solid transparent" }}
      >
        <Box
          w={["100vw", "auto"]}
          h={["auto", "100vh"]}
          d="flex"
          flexDirection={["column", "row"]}
          justifyContent="center"
          alignItems="center"
          mr="4"
        >
          <Pana
            style={!isLargerThan767 ? { width: "100vw", height: "30vh" } : {}}
          />
        </Box>
      </Box>
    </Flex>
  );
};

export default HeroSection;
