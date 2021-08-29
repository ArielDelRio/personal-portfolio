import styled from "styled-components";
import Pana from "../../assets/pana.svg";

const PanaSvg = styled(Pana)`
  height: 100vh;
  width: 100%;
  @media (max-width: 768px) {
    height: 30vh;
  }
`;

export { PanaSvg };
