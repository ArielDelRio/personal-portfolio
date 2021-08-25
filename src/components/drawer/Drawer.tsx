import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

const CustomDrawer = ({ isOpen, onOpen, onClose, children }) => {
  return (
    <>
      <Button
        colorScheme="whiteAlpha"
        variant="ghost"
        color={{ base: "black", md: "white" }}
        onClick={onOpen}
        fontSize="2em"
        alignSelf="center"
      >
        <FaBars />
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        returnFocusOnClose={false}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="#000" borderLeft="2px solid">
          <DrawerCloseButton size="lg" color="gray.400" />
          <DrawerHeader>{/* Create your account */}</DrawerHeader>

          <DrawerBody
            textAlign="center"
            display="flex"
            flexDirection="column"
            justifyContent="space-evenly"
          >
            {children}
          </DrawerBody>

          <DrawerFooter>
            {/* <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CustomDrawer;
