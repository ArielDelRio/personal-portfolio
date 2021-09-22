import React from "react";
import { Box, Button, Center, HStack, Text } from "@chakra-ui/react";
import {
  FaAngleDoubleUp,
  FaFacebook,
  FaFacebookF,
  FaFacebookSquare,
  FaLinkedin,
  FaTwitter,
  FaTwitterSquare,
} from "react-icons/fa";
import { ArrowIcon, SocialItem } from "./Footer.styles";

const Footer = () => {
  return (
    <Box minH="40vh" bg="#1D1D1D" color="white">
      <Center pt="10" d="flex" flexDirection="column">
        <ArrowIcon
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FaAngleDoubleUp />
        </ArrowIcon>
      </Center>
      <Center pt="10">
        <HStack spacing="10">
          <SocialItem
            href="https://www.facebook.com/ariel.delrio.73/"
            target="_blank"
            colorHover="#4267B2"
          >
            <FaFacebookSquare />
          </SocialItem>
          <SocialItem
            href="https://www.linkedin.com/in/ariel-del-rio-94b34a185/"
            target="_blank"
            colorHover="#0077b5"
          >
            <FaLinkedin />
          </SocialItem>
          <SocialItem
            href="https://twitter.com/ArieldRio"
            target="_blank"
            colorHover="#1DA1F2"
          >
            <FaTwitterSquare />
          </SocialItem>
        </HStack>
      </Center>
      <Center pt="10">
        <Text>@2021 Ariel Del Rio All Rights Reserved.</Text>
      </Center>
    </Box>
  );
};

export default Footer;
