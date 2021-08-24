import React from "react";
import { Box } from "@chakra-ui/layout";
import {
  SlideFade,
  CloseButton,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import Stories, { WithSeeMore } from "react-insta-stories";

export interface StoryProps {
  url: string;
  description: string;
}

const customCollapsedComponent = ({ toggleMore, action }) => (
  <Box
    d="flex"
    justifyContent="center"
    onClick={() => {
      action("pause");
      window.open("https://mywebsite.url", "_blank");
    }}
  >
    <CloseButton w="full" h="16" size="lg" color="white" bg="pink.800" />
  </Box>
);

const CustomStoryContent = ({ story, action }) => {
  return (
    <WithSeeMore
      story={story}
      action={action}
      //   customCollapsed={customCollapsedComponent}
    ></WithSeeMore>
  );
};

// const SeeMore = ({ close, description }) => {
//   const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });
//   const handleClick = () => {
//     onToggle();
//     close();
//   };

//   return (
//     <Box h="100%" onClick={handleClick} d="flex" flexDirection="column-reverse">
//       <SlideFade in={isOpen}>
//         <Box
//           p="40px"
//           color="white"
//           mt="4"
//           bg="teal.500"
//           rounded="md"
//           shadow="md"
//         >
//           {description}
//         </Box>
//       </SlideFade>
//     </Box>
//   );
// };

const CustomStories = ({ stories, handleCloseStory }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <Stories
      stories={stories.map((story) => {
        return {
          url: story.url,
          seeMore: CustomStoryContent,
          seeMoreCollapsed: ({ toggleMore, action }) => (
            <Box d="flex" justifyContent="center" onClick={handleCloseStory}>
              <CloseButton
                w="full"
                h="16"
                size="lg"
                color="white"
                bg="pink.800"
              />
            </Box>
          ),
          //   seeMore: SeeMore({ close, description: stories.description }),
        };
      })}
      storyContainerStyles={{
        paddingTop: isMobile ? "10%" : 0,
      }}
      width="100%"
      height="100%"
      loop
    />
  );
};

export default CustomStories;
