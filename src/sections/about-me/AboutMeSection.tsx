import React, { useState } from "react";
import { Atom } from "../../components";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { AvatarWrapper, Avatar } from "./AboutMeSection.styles";

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
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          mt={{ base: 8, sm: "auto" }}
        >
          <Text
            fontSize="large"
            noOfLines={[5, 0]}
            w={{ base: "auto", sm: "80vw" }}
          >
            FullStack Senior Developer with more than 5 years of experience
            designing, developing and testing web applications and microservices
            using an ecosystem of technologies such as Next.js, Gatsby, NestJS,
            Node.js, Express, Firebase, Supabase, MongoDB, Graphql, Turborepo,
            React, React Native and TypeScript. My workflow includes from the
            design and modeling of prototypes with high quality standards in the
            creation of user-friendly interfaces and user experiences, to the
            implementation of these, employing good development practices
            focused on the optimization and performance of responsive and
            progressive applications, as well as the maintenance and deployment
            of the code. I am a self-taught young man, passionate about
            technologies and programming, responsible, empathetic and with
            excellent organizational skills. I love to create tools and deliver
            solutions by developing web and mobile applications.
          </Text>
          <Atom active={active} handleClick={() => setActive(!active)} />
        </Box>
      </Container>
    </Box>
  );
};

export default AboutMeSection;
