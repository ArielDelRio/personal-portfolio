import { Box, Center, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Face, Container } from "./Diamond.style";

const Diamond = ({ image_path }) => {
  return (
    <Container
      w="32"
      h="32"
      mb="10"
      cursor="pointer"
      clipPath="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"
      position="relative"
      _hover={{}}
    >
      <Face className="front">
        <Image src={image_path} alt="image_path" boxSize="14" />
      </Face>
      <Face className="back">
        <Text>Back</Text>
      </Face>
    </Container>
  );
};
export default Diamond;
