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
import { HamburgerIcon } from "@chakra-ui/icons";

const CustomDrawer = ({isOpen, onOpen, onClose, children }) => {
  return (
    <>
      <Button colorScheme="whiteAlpha" variant="ghost" onClick={onOpen}>
        <HamburgerIcon color={{base: "black", md: "white"}} w={10} h={10} />
      </Button>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent backgroundColor="#000" borderLeft="2px solid">
          <DrawerCloseButton size="lg" color="gray.400"/>
          <DrawerHeader>
            {/* Create your account */}
            </DrawerHeader>

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
