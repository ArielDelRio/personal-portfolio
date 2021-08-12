import React from "react";
import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import logo_text_img from "../../../images/logo_text.svg";

const AboutMeSection = () => {
  return (
    <Box minH="30vh" bg="#1D1D1D" color="white" p="8" fontFamily="Roboto">
      <Container maxW="container.xl">
        <Heading as="h2">About me</Heading>
        <Box
          d="flex"
          flexDirection={["column", "row"]}
          alignItems="center"
          justifyContent="space-between"
          mt={{ base: 8, sm: "auto" }}
        >
          <Text mr="8" noOfLines={[5, 0]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            ipsam sapiente, labore error architecto expedita inventore nihil
            earum reprehenderit laboriosam distinctio, illum aliquam repellat
            corporis dolores consequatur sit dolor eos! Necessitatibus
            accusantium aspernatur hic, laborum tempore cumque culpa quis vitae
            illum voluptas rerum, recusandae perspiciatis nostrum quam amet.
            Voluptatibus quam blanditiis reprehenderit sed omnis atque animi
            laborum veniam recusandae fuga?
          </Text>
          <Image
            h={{ base: "20vh", sm: "30vh" }}
            transform={"rotateZ(27deg)"}
            src={logo_text_img}
            alt="logo text"
            alignSelf={{ base: "flex-end", sm: "flex-start" }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default AboutMeSection;
