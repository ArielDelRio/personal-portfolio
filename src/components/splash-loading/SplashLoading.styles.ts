import styled from "styled-components";

interface LoadingContainer {
  endAnimation: boolean;
  secondsToEndAnimation: number;
}

const SplashScreenContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingContainer = styled.div<LoadingContainer>`
  background-color: #e5e5e5;
  border-radius: 5px;
  padding: 2em;

  animation: ${(props) =>
    props.endAnimation
      ? `moveToUp ${props.secondsToEndAnimation}s ease-in-out forwards`
      : "zoomEffect 2s infinite running"};

  @keyframes zoomEffect {
    0% {
      transform: scale(0.9, 0.9);
    }
    50% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(0.9, 0.9);
    }
  }

  @keyframes moveToUp {
    0% {
      transform: translateY(0);
      filter: invert(0);
    }
    20% {
      filter: invert(1);
    }
    40% {
      transform: translateY(20%);
      filter: invert(1);
    }
    100% {
      transform: translateY(calc(-50vh - 100px));
      filter: invert(1);
    }
  }
`;

export { SplashScreenContainer, LoadingContainer };
