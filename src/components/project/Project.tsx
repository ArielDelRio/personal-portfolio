import React from "react";
import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Image,
  ScaleFade,
  SlideFade,
  Text,
  useBoolean,
} from "@chakra-ui/react";
import { FaExternalLinkAlt, FaCode, FaEye } from "react-icons/fa";
import {
  PreviewProject,
  ProjectContainer,
  ProjectTitle,
} from "./Project.style";
import { CloseButton } from "@chakra-ui/react";
import CustomStories, { StoryProps } from "../stories/Stories";

export interface ProjectProps {
  id: number;
  name: string;
  main_img: string;
  description: string;
  project_link: string;
  repo_link: string;
  fullView?: boolean;
  stories?: Array<StoryProps>;
  isMobile?: boolean;
  closeSelectedProject?: VoidFunction;
}

const Project: React.FC<ProjectProps> = ({
  id,
  name,
  main_img,
  description,
  project_link,
  repo_link,
  fullView,
  stories,
  closeSelectedProject,
}) => {
  const [showStories, setShowStories] = useBoolean();

  return !fullView ? (
    <ProjectContainer className="project-container">
      <PreviewProject src={main_img} alt={`${name} image`} />
      <ProjectTitle>{name}</ProjectTitle>
    </ProjectContainer>
  ) : (
    <ScaleFade
      initialScale={0}
      in={fullView}
      style={{ width: "100%", height: "100%" }}
    >
      {showStories ? (
        <CustomStories
          stories={stories}
          handleCloseStory={setShowStories.off}
        />
      ) : (
        <Box
          d="flex"
          flexDirection="column"
          h="100%"
          w="100%"
          bg="gray.800"
          color="white"
        >
          <CloseButton
            position="absolute"
            top="5"
            right="5"
            size="lg"
            onClick={closeSelectedProject}
          />
          <Box
            h={{ base: "60%", md: "50%" }}
            w="100%"
            d="flex"
            flexDirection={{ base: "column", md: "row" }}
          >
            <Box w={{ base: "100%", md: "40%" }}>
              <Image boxSize="full" src={main_img} />
              <Button
                isDisabled={!stories}
                size="md"
                shadow="lg"
                border="1px solid #fff"
                rounded="full"
                position="absolute"
                top={{ base: "initial", md: "5" }}
                right={{ base: 5, md: "55%", lg: "57%" }}
                variant="solid"
                colorScheme="whatsapp"
                fontSize={{ base: "1.2em", md: "2em" }}
                h={{ base: "6%", md: "8%", lg: "11%" }}
                onClick={setShowStories.on}
              >
                <FaEye />
              </Button>
            </Box>
            <Box
              w={{ base: "100%", md: "60%" }}
              d="flex"
              justifyContent="space-evenly"
              alignItems="center"
              flexDirection="column"
            >
              <Heading as="h2" fontFamily="body">
                <Box as="span" color="orange.400">
                  {"<"}
                </Box>
                {name}
                <Box as="span" color="orange.400">
                  {"/>"}
                </Box>
              </Heading>
              <HStack spacing="4" mt="4">
                <Button
                  as="a"
                  href={project_link}
                  target="_blank"
                  size="lg"
                  colorScheme="facebook"
                  leftIcon={<FaExternalLinkAlt />}
                >
                  Project
                </Button>
                <Button
                  as="a"
                  href={repo_link}
                  target="_blank"
                  size="lg"
                  colorScheme="twitter"
                  leftIcon={<FaCode />}
                >
                  Code
                </Button>
              </HStack>
            </Box>
          </Box>
          <Divider color="white" height="10px" orientation="horizontal" />
          <Box h={{ base: "40%", md: "50%" }} mt="6" mx={{ base: 6, md: 10 }}>
            <Text fontSize="xl">{description}</Text>
          </Box>
        </Box>
      )}
    </ScaleFade>
  );
};

export default Project;
