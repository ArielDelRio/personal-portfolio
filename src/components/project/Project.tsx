import { Box, Image, ScaleFade, Text } from "@chakra-ui/react";
import React from "react";
import {
  PreviewProject,
  ProjectContainer,
  ProjectTitle,
} from "./Project.style";
import { CloseButton } from "@chakra-ui/react";

export interface ProjectProps {
  id: number;
  name: string;
  main_img: string;
  description: string;
  project_link: string;
  repo_link: string;
  fullView?: boolean;
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
  closeSelectedProject,
}) => {
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
      <Box
        d="flex"
        justifyContent="center"
        alignItems="center"
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
        {name}
      </Box>
    </ScaleFade>
  );
};

export default Project;
