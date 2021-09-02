import styled from "styled-components";
import PanaSVG from "../../assets/pana.svg";

const Pana = styled(PanaSVG)`
  height: 100vh;
  width: 100%;
  @media (max-width: 768px) {
    height: 30vh;
  }
`;

export { Pana };
