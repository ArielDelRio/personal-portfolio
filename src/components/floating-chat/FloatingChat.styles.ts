import styled from "styled-components";

const ContainerFloatingChat = styled.div`
  .container-button {
    width: 0;
    height: 0;
    & > div {
      transition: opacity 300ms;
      opacity: 0.3;
    }
    &:hover > div {
      opacity: 1;
    }
  }
`;

export default ContainerFloatingChat;
