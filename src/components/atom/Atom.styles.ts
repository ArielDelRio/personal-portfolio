import styled from "styled-components";

interface AtomProps {
  active: boolean;
}

interface ElectronProps {
  active: boolean;
}

const AtomContainer = styled.div`
  margin-left: 2em;
  margin-right: 2em;

  @media (max-width: 900px) {
    margin-top: 2em;
  }

  /* width: auto; */
`;

const AtomWrapper = styled.div<AtomProps>`
  cursor: pointer;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  position: relative;
  filter: drop-shadow(2px 4px 6px black);

  animation: ${(props) =>
    `atom-rotate infinite linear 20s ${props.active ? "running" : "paused"}`};

  @media (max-width: 900px) {
    width: 150px;
    height: 150px;
  }

  @keyframes atom-rotate {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &:after {
    content: "";
    position: absolute;
    top: 90px;
    left: 90px;
    width: 1.2em;
    height: 1.2em;
    border-radius: 50%;
    transition: background-color 500ms linear;
    background-color: ${(props) => (props.active ? "#fff" : "#1D1D1D")};

    @media (max-width: 900px) {
      top: 65px;
      left: 65px;
    }
  }
`;

const Electron = styled.div<ElectronProps>`
  position: absolute;
  width: 200px;
  height: 200px;
  background: transparent;
  border-radius: 100px;
  border: 5px solid #000;
  animation: electron1 2s linear infinite;
  transform: rotateY(60deg) rotateX(-60deg) rotate(0);
  line-height: 150px;
  text-align: center;
  font-size: 2.5em;

  @media (max-width: 900px) {
    width: 150px;
    height: 150px;
    border-radius: 100px;
  }

  &:before {
    content: "";
    position: absolute;
    transition: width 500ms linear, height 500ms linear;
    width: ${(props) => (props.active ? "20px" : "0px")};
    height: ${(props) => (props.active ? "15px" : "0px")};
    border-radius: 50%;
    background: #fff;
    top: -7.5px;
    left: 100px;

    @media (max-width: 900px) {
      width: ${(props) => (props.active ? "15px" : "0px")};
      height: ${(props) => (props.active ? "10px" : "0px")};
    }
  }

  &:nth-of-type(2) {
    transform: rotateY(-60deg) rotateX(-60deg) rotate(0);
    animation: electron2 2s linear infinite;
  }
  &:nth-of-type(3) {
    transform: rotateY(75deg) rotateX(0) rotate(180deg);
    animation: electron3 2s linear infinite;
  }

  @keyframes electron1 {
    from {
      transform: rotateY(60deg) rotateX(-60deg) rotate(0);
    }
    to {
      transform: rotateY(60deg) rotateX(-60deg) rotate(360deg);
    }
  }
  @keyframes electron2 {
    from {
      transform: rotateY(-60deg) rotateX(-60deg) rotate(0);
    }
    to {
      transform: rotateY(-60deg) rotateX(-60deg) rotate(360deg);
    }
  }
  @keyframes electron3 {
    from {
      transform: rotateY(75deg) rotateX(0) rotate(180deg);
    }
    to {
      transform: rotateY(75deg) rotateX(0) rotate(540deg);
    }
  }
`;

export { AtomWrapper, AtomContainer, Electron };
