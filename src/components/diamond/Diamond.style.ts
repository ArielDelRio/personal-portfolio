import styled from "styled-components";

const Container = styled.div`
  width: 32px;
  height: 32px;
  cursor: pointer;
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  position: relative;
`;

const Face = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateY(0deg);
  transform-style: preserve-3d;
  transition: 0.5s cubic-bezier(0.4, 0.2, 0.2, 1);

  &.front {
    background-color: #c4c4c4;
    transform: rotateY(0deg);
  }

  &.back {
    background-color: linear-gradient(
      271deg,
      #c4c4c4 -1.98%,
      rgba(196, 196, 196, 0) 96.46%
    );
    transform: rotateY(180deg);
  }
`;

export { Container, Face };
