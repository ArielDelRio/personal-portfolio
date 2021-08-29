import styled from "styled-components";
import LogoSvg from "../../assets/logo_text.svg";

const LogoText = styled(LogoSvg)`
    height: 20vh;
    width:  20vw;
    transform: rotateZ(27deg);
    @media (max-width: 768px) {
    height: 20vh;
    width: auto;
  }
`;

export { LogoText };
