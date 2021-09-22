import styled from "styled-components";
import AvatarSVG from "../../assets/avatar_about_me.svg";

interface AvatarProps {
  active: boolean;
}

const AvatarWrapper = styled.div<AvatarProps>`
  height: 10vh;
  width: auto;
  margin-right: 3em;
  margin-left: 3em;
  cursor: pointer;

  transition: filter 300ms;
  filter: ${(props) => (props.active ? "brightness(1)" : "brightness(0.4)")};

  animation: ${(props) =>
    `float infinite 20s ${props.active ? "running" : "paused"}`};
  @media (max-width: 768px) {
    margin-top: 3em;
  }

  @keyframes float {
    0% {
      transform: translate(80px, -20px) rotateZ(27deg);
    }
    20% {
      transform: translate(40px, 20px) rotateZ(-27deg);
    }
    50% {
      transform: translate(-40px, -20px) rotateZ(27deg);
    }
    80% {
      transform: translate(0px, 0px) rotateZ(-27deg);
    }
    100% {
      transform: translate(80px, -20px) rotateZ(27deg);
    }
  }
`;

const Avatar = styled(AvatarSVG)`
  width: inherit;
  height: inherit;
`;

export { AvatarWrapper, Avatar };
