import React, { useRef } from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";

const ContactSection = () => {
  const formEl = useRef(null);

  const fieldsValidation = {
    name: { isRequired: true, containNumbers: false, maxLength: 20 },
    email: { isRequired: true, checkEmail: true },
    phone: { checkPhoneNumber: true },
    message: { isRequired: true, maxLength: 500 },
  };

  const validate = (values) => {
    const errors = {};

    //name validation
    if (fieldsValidation.name.isRequired && !values.name.trim()) {
      errors["name"] = "Required 😳";
    }
    if (!fieldsValidation.name.containNumbers && /\d/.test(values.name)) {
      errors["name"] = "Does your name contain numbers? Awesome🤖";
    }
    if (fieldsValidation.name.maxLength <= values.name.length) {
      errors[
        "name"
      ] = `I can't remember that long name. More than ${fieldsValidation.message.maxLength} characters`;
    }

    //email validation
    const emailReg =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (fieldsValidation.email.isRequired && !values.email.trim()) {
      errors["email"] = "Required 😳";
    }

    if (fieldsValidation.email.checkEmail && !emailReg.test(values.email)) {
      errors["email"] = "I don't recognize that email";
    }

    //phone validation
    const phoneReg =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (
      values.phone &&
      fieldsValidation.phone.checkPhoneNumber &&
      !phoneReg.test(values.phone)
    ) {
      errors["phone"] = "I can't call that number 😕";
    }

    //message validation
    if (fieldsValidation.message.isRequired && !values.message.trim()) {
      errors["message"] = "Required 😳";
    }
    if (fieldsValidation.message.maxLength <= values.message.length) {
      errors[
        "message"
      ] = `I can't remember that long name. More than ${fieldsValidation.message.maxLength} characters`;
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
          Interested in working together? Fill out the form below with some info
          about your project and I will get back to you as soon as I can. Please
          allow a couple days for me to respond.
        </Text>
      </Center>
      <Center py="10">
        <Box w={{ base: "80vw", md: "40vw" }}>
          <form
            ref={formEl}
            method="post"
            action="https://getform.io/f/613b4554-5899-4096-a75d-226a26741746"
            onSubmit={formik.handleSubmit}
          >
            <VStack spacing="6">
              <FormControl isInvalid={formik.errors.name !== ""} isRequired>
                <Input
                  id="name"
                  name="name"
                  maxLength={fieldsValidation.name.maxLength}
                  variant="unstyled"
                  size="lg"
                  p="2"
                  borderLeft="4px solid"
                  borderBottom="4px solid"
                  borderColor={formik.errors.name ? "red.700" : "#000"}
                  borderRadius="0"
                  placeholder="Enter your name*"
                  transition="border 300ms"
                  _hover={{
                    borderColor: formik.errors.name
                      ? "red.700"
                      : "blackAlpha.400",
                  }}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.errors.email !== ""} isRequired>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  variant="unstyled"
                  size="lg"
                  p="2"
                  borderLeft="4px solid"
                  borderBottom="4px solid"
                  borderColor={formik.errors.email ? "red.700" : "#000"}
                  borderRadius="0"
                  placeholder="Enter your email*"
                  transition="border 300ms"
                  _hover={{
                    borderColor: formik.errors.email
                      ? "red.700"
                      : "blackAlpha.400",
                  }}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.errors.phone !== ""}>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  variant="unstyled"
                  size="lg"
                  p="2"
                  borderLeft="4px solid"
                  borderBottom="4px solid"
                  borderColor={formik.errors.phone ? "red.700" : "#000"}
                  borderRadius="0"
                  placeholder="Phone Number"
                  transition="border 300ms"
                  _hover={{
                    borderColor: formik.errors.phone
                      ? "red.700"
                      : "blackAlpha.400",
                  }}
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                />
                <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.errors.message !== ""} isRequired>
                <Textarea
                  id="message"
                  name="message"
                  maxLength={fieldsValidation.message.maxLength}
                  variant="unstyled"
                  size="lg"
                  p="2"
                  borderLeft="4px solid"
                  borderBottom="4px solid"
                  borderColor={formik.errors.message ? "red.700" : "#000"}
                  borderRadius="0"
                  placeholder="Your Message*"
                  transition="border 300ms"
                  _hover={{
                    borderColor: formik.errors.message
                      ? "red.700"
                      : "blackAlpha.400",
                  }}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                />
                <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
              </FormControl>

              <Button
                isLoading={formik.isSubmitting}
                isDisabled={!formik.isValid}
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
          </form>
        </Box>
      </Center>
    </Box>
  );
};

export default ContactSection;
