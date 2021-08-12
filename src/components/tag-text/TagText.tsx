import { Text } from "@chakra-ui/react";
import React from "react";

const TagText = ({ children, value }) => {
  return (
    <>
      <Text
        as="em"
        fontSize={{ base: "2xl", md: "xx-large" }}
        fontFamily="Dancing Script"
        color="gray.500"
      >
        {`<${value}>`}
      </Text>
      {children}
      <Text
        as="em"
        fontSize={{ base: "2xl", md: "xx-large" }}
        fontFamily="Dancing Script"
        color="gray.500"
      >
        {`</${value}>`}
      </Text>
    </>
  );
};

export default TagText;
