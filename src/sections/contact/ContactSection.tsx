import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const ContactSection = () => {
  return (
    <Box
      minH="100vh"
      bg="radial-gradient(50% 50% at 50% 50%, rgba(26, 21, 21, 0) 0%, rgba(1, 1, 1, 0.16) 100%), #FFFFFF;"
    >
      <Center pt="10">
        <Heading
          id="contact"
          textTransform="uppercase"
          fontFamily="Roboto"
          as="h2"
          border="6px solid #000"
          py="2"
          px="16"
        >
          Contact
        </Heading>
      </Center>
      <Center mt="10">
        <Text w={{ base: "80vw", md: "60vw" }} textAlign="center">
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
          varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
          quis libero viverra facilisis ut ac est.
        </Text>
      </Center>
      <Center py="10">
        <Box as="form" w={{ base: "80vw", md: "40vw" }}>
          <VStack spacing="6">
            <FormControl id="first-name" isRequired>
              <Input
                variant="unstyled"
                size="lg"
                p="2"
                borderLeft="4px solid #000"
                borderBottom="4px solid #000"
                borderRadius="0"
                placeholder="Enter your name*"
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <Input
                type="email"
                variant="unstyled"
                size="lg"
                p="2"
                borderLeft="4px solid #000"
                borderBottom="4px solid #000"
                borderRadius="0"
                placeholder="Enter your email*"
              />
            </FormControl>
            <FormControl id="phone">
              <Input
                type="tel"
                variant="unstyled"
                size="lg"
                p="2"
                borderLeft="4px solid #000"
                borderBottom="4px solid #000"
                borderRadius="0"
                placeholder="Phone Number"
              />
            </FormControl>
            <FormControl id="message" isRequired>
              <Textarea
                variant="unstyled"
                size="lg"
                p="2"
                borderLeft="4px solid #000"
                borderBottom="4px solid #000"
                borderRadius="0"
                placeholder="Your Message*"
              />
            </FormControl>
            <Box>
              <Button
                // isLoading
                type="submit"
                mt={{ md: "3em" }}
                size="lg"
                bg="transparent"
                loadingText="Submitting"
                borderX="4px solid #000"
                borderRadius="0"
                fontWeight="bold"
              >
                SUBMIT
              </Button>
            </Box>
          </VStack>
        </Box>
      </Center>
    </Box>
  );
};

export default ContactSection;
