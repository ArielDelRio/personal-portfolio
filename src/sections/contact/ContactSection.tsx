import React, { useRef } from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";

const ContactSection = () => {
  const formEl = useRef(null);

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors["name"] = "Required";
    }
    if (!values.email) {
      errors["email"] = "Required";
    }
    return errors;
  };

  const handleSubmit = (values, action) => {
    formEl.current.submit();
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validate,
    onSubmit: handleSubmit,
  });

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
        <Box
          ref={formEl}
          as="form"
          method="post"
          action="https://getform.io/f/613b4554-5899-4096-a75d-226a26741746"
          onSubmit={() => formik.handleSubmit()}
          w={{ base: "80vw", md: "40vw" }}
        >
          <VStack spacing="6">
            <FormControl
              isInvalid={formik.errors.name && formik.touched.name}
              isRequired
            >
              <Input
                id="name"
                name="name"
                variant="unstyled"
                size="lg"
                p="2"
                borderLeft="4px solid #000"
                borderBottom="4px solid #000"
                borderRadius="0"
                placeholder="Enter your name*"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={formik.errors.email && formik.touched.email}
              isRequired
            >
              <Input
                id="email"
                name="email"
                type="email"
                variant="unstyled"
                size="lg"
                p="2"
                borderLeft="4px solid #000"
                borderBottom="4px solid #000"
                borderRadius="0"
                placeholder="Enter your email*"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={formik.errors.phone && formik.touched.phone}
            >
              <Input
                id="phone"
                name="phone"
                type="tel"
                variant="unstyled"
                size="lg"
                p="2"
                borderLeft="4px solid #000"
                borderBottom="4px solid #000"
                borderRadius="0"
                placeholder="Phone Number"
                value={formik.values.phone}
                onChange={formik.handleChange}
              />
              <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={formik.errors.message && formik.touched.message}
              isRequired
            >
              <Textarea
                id="message"
                name="message"
                variant="unstyled"
                size="lg"
                p="2"
                borderLeft="4px solid #000"
                borderBottom="4px solid #000"
                borderRadius="0"
                placeholder="Your Message*"
                value={formik.values.message}
                onChange={formik.handleChange}
              />
              <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
            </FormControl>
            <Button
              isLoading={formik.isSubmitting}
              type="submit"
              mt={{ md: "3em" }}
              size="lg"
              bg="transparent"
              loadingText="Submitting"
              borderX="4px solid #000"
              borderRadius="0"
              fontWeight="bold"
              transition="all 700ms"
              _hover={{
                px: "5em",
                bg: "blackAlpha.400",
                color: "#000",
              }}
            >
              SUBMIT
            </Button>
          </VStack>
        </Box>
      </Center>
    </Box>
  );
};

export default ContactSection;
