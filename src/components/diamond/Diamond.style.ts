import styled from "styled-components";

const diamondSize = "6em";

const Container = styled.div`
  height: ${diamondSize};
  width: ${diamondSize};
  perspective: 1000;
  cursor: pointer;

  &:hover {
    .containerIn {
      transform: rotate3d(0, 1, 0, 180deg);
    }
  }
`;

const ContainerIn = styled.div`
  height: ${diamondSize};
  width: ${diamondSize};
  transition: 0.6s;
  transform-style: preserve-3d;
`;

const Face = styled.div`
  top: 0;
  left: 0;
  height: ${diamondSize};
  width: ${diamondSize};
  background: #fff;
  backface-visibility: hidden;
  position: absolute;

  &.front {
    transform: rotate(-45deg);
    background: #bababa;
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
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${diamondSize};
  width: $diamondSize;
  transform: rotate(45deg);
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
  &::before{
    content:' ';
  width: 0; 
  height: 0; 
  margin-top: -5px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid black;
  }
`;

export { Container, ContainerIn, Face, Content, Info, Rate, Tooltip };
