import React, { useEffect, useState, useRef } from "react";
import Stories from "react-insta-stories";
import {
  Box,
  Center,
  Divider,
  Heading,
  SlideFade,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Device, DeviceProps } from "../../components";
import { useInViewport } from "react-in-viewport";
import react_logo from "../../images/skill_logos/react.svg";
import gatsby_logo from "../../images/skill_logos/git.svg";

const SeeMore = ({ close }) => {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });
  const handleClick = () => {
    onToggle();
    close();
  };
  return (
    <Box h="100%" onClick={handleClick} d="flex" flexDirection="column-reverse">
      <SlideFade in={isOpen}>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          fugit aut! Tempora sed maxime natus non temporibus excepturi sequi
          architecto suscipit harum, quasi, eum, id nihil necessitatibus laborum
          illum veniam?
        </Box>
      </SlideFade>
    </Box>
  );
};

const responsiveChecks = {
  base: 0.65,
  md: 0.7,
  lg: 0.8,
  xl: 0.9,
};

const PortfolioSection = () => {
  const variant = useBreakpointValue({
    base: responsiveChecks.base,
    md: responsiveChecks.md,
    lg: responsiveChecks.lg,
    xl: responsiveChecks.xl,
  });

  const myRef = useRef();
  const { inViewport } = useInViewport(
    myRef,
    {},
    { disconnectOnLeave: false },
    {}
  );

  const [device, setDevice] = useState<DeviceProps>({ type: "MACBOOK" });

  useEffect(() => {
    if (variant <= responsiveChecks.base) setDevice({ type: "IPHONEX" });
    else if (variant <= responsiveChecks.md) setDevice({ type: "IPAD" });
    else if (variant <= responsiveChecks.lg) setDevice({ type: "MACBOOK" });
  }, [variant]);

  return (
    <Box minH="100vh" bg="#1D1D1D">
      <Center pt="10">
        <Heading
          id="portfolio"
          textTransform="uppercase"
          fontFamily="Roboto"
          as="h2"
          color="#fff"
          border="6px solid #fff"
          py="2"
          px="16"
        >
          Portfolio
        </Heading>
      </Center>
      <Center mt={device.type === "IPHONEX" && -32}>
        <Box transform={`scale(${variant})`}>
          <Device type={device.type}>
            <Box
              h="100%"
              bg={inViewport ? "#fff" : "#0c0c0c"}
              transition="bg 1000ms"
            >
              <Box
                h="100%"
                d="flex"
                justifyContent="center"
                alignItems="center"
                transition="opacity 1000ms"
                opacity={inViewport ? 1 : 0}
              >
                <Stories
                  stories={[
                    {
                      url: react_logo,
                      seeMore: SeeMore,
                    },
                    {
                      url: gatsby_logo,
                      seeMore: SeeMore,
                    },
                  ]}
                  storyContainerStyles={{
                    paddingTop: variant <= responsiveChecks.base ? "10%" : 0,
                  }}
                  width="100%"
                  height="100%"
                  loop
                />
              </Box>
            </Box>
          </Device>
          <Divider
            ref={myRef}
            color="white"
            height="50px"
            orientation="horizontal"
          />
        </Box>
      </Center>
    </Box>
  );
};
export default PortfolioSection;
