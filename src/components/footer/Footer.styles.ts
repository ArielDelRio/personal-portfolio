import styled from "styled-components";

interface SocialItemProps {
  colorHover?: string;
}

const ArrowIcon = styled.button`
  font-size: 2.5em;
  transition: all 300ms;
  /* &:hover { */
  animation: toUp 2s infinite;
  /* } */
  @keyframes toUp {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const SocialItem = styled.a<SocialItemProps>`
  color: white;
  font-size: 2em;
  transition: transform 250ms, color 250ms;
  &:hover {
    transform: scale(1.5);
    color: ${(p) => p.colorHover};
  }
`;

export { ArrowIcon, SocialItem };
