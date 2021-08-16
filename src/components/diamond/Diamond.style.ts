import styled from "styled-components";

const diamondSize = { base: "3.5rem", sm: "5rem" };


const Container = styled.div`
  height: ${diamondSize.sm};
  width: ${diamondSize.sm};
  perspective: 1000;
  cursor: pointer;
  transition: background-color 300ms;

  &.active{
    .containerIn {
      transform: rotate3d(0, 1, 0, 180deg);
    }
  }

  &:hover {
    .front{
      background-color: #efefef;
      border: 1px solid #323232;
      img {
        filter: none;
      }
    }
  }
  @media (max-width: 480px) {
    height: ${diamondSize.base};
    width: ${diamondSize.base};
  }
`;

const ContainerIn = styled.div`
  height: ${diamondSize.sm};
  width: ${diamondSize.sm};
  transition: 0.6s;
  transform-style: preserve-3d;
  @media (max-width: 480px) {
    height: ${diamondSize.base};
    width: ${diamondSize.base};
  }
`;

const Face = styled.div`
  top: 0;
  left: 0;
  height: ${diamondSize.sm};
  width: ${diamondSize.sm};
  background: #fff;
  backface-visibility: hidden;
  position: absolute;
  @media (max-width: 480px) {
    height: ${diamondSize.base};
    width: ${diamondSize.base};
  }

  &.front {
    transition: background-color 300ms, border 300ms;
    transform: rotate(-45deg);
    background: #323232;
    border: 1px solid #323232;
    img {
      filter: grayscale(100%) saturate(0);
    }
  }

  &.back {
    transform: rotate3d(0, 1, 0, 180deg) rotate(-45deg);
    background: linear-gradient(
      271deg,
      #c4c4c4 -1.98%,
      rgba(196, 196, 196, 0) 96.46%
    );

    @media (max-width: 480px) {
      font-size: 10px;
    }
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${diamondSize.sm};
  width: ${diamondSize.sm};
  transform: rotate(45deg);
  @media (max-width: 480px) {
    height: ${diamondSize.base};
    width: ${diamondSize.base};
  }
`;

const Info = styled.span`
  text-align: center;
  margin-top: 10%;
`;

const Rate = styled.span`
  display: flex;
  flex-direction: row;
`;

const Tooltip = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #000;
  margin-top: 10px;
  &::before {
    content: " ";
    width: 0;
    height: 0;
    margin-top: -5px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid black;
  }
`;

export { Container, ContainerIn, Face, Content, Info, Rate, Tooltip };
