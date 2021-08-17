import React, { useEffect, useState } from "react";
import { Box, Center, Heading, Text } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";
import { Device, DeviceProps } from "../../components";

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
              bg="#0c0c0c"
              transition="all 500ms"
              _hover={{
                backgroundColor: "#FFF",
              }}
            >
              <Box
                h="100%"
                d="flex"
                justifyContent="center"
                alignItems="center"
                transition="all 1500ms"
                opacity={0}
                _hover={{
                  opacity: 1,
                }}
              >
                <Text color="black" onClick={() => alert("hey")}>
                  Hello World
                </Text>
              </Box>
            </Box>
          </Device>
        </Box>
      </Center>
    </Box>
  );
};
export default PortfolioSection;
