import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  Center,
  Divider,
  Heading,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Device,
  DeviceProps,
  Project,
  ProjectProps,
  Swiper,
} from "../../components";
import { useInViewport } from "react-in-viewport";
import Projects from "./projects";

interface ProjectDataState {
  selectedProject: ProjectProps;
  lastSelectedProjectId: number;
}

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
  const [projectData, setProjectData] = useState<ProjectDataState>({
    selectedProject: null,
    lastSelectedProjectId: 0,
  });

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
              transition="background 1000ms"
            >
              <Box
                h="100%"
                d="flex"
                justifyContent="center"
                alignItems="center"
                transition="opacity 1s, visibility 0.5s"
                opacity={inViewport ? 1 : 0}
                visibility={inViewport ? "visible" : "hidden"}
              >
                {!projectData.selectedProject ? (
                  <Swiper initialSlide={projectData.lastSelectedProjectId}>
                    {Projects.map((project) => (
                      <Box
                        key={project.id}
                        onClick={() =>
                          setProjectData({
                            selectedProject: project,
                            lastSelectedProjectId: project.id,
                          })
                        }
                      >
                        <Project {...project} />
                      </Box>
                    ))}
                  </Swiper>
                ) : (
                  <Project
                    closeSelectedProject={() =>
                      setProjectData({ ...projectData, selectedProject: null })
                    }
                    fullView
                    stories={projectData.selectedProject.stories}
                    {...projectData.selectedProject}
                  />
                )}
              </Box>
            </Box>
          </Device>
          <Divider
            ref={myRef}
            color="white"
            height="10px"
            orientation="horizontal"
          />
        </Box>
      </Center>
    </Box>
  );
};
export default PortfolioSection;
