import { Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import {
  Container,
  ContainerIn,
  Face,
  Content,
  Info,
  Rate,
  Tooltip,
} from "./Diamond.style";

interface DiamondProp {
  image_path: string;
  skill_name: string;
  rate: number;
}

const Diamond: React.FC<DiamondProp> = ({ image_path, skill_name, rate }) => {
  const [active, setActive] = useState(false);
  return (
    <Container
      className={active ? "active" : ""}
      style={{ visibility: !skill_name ? "hidden" : "visible" }}
      onClick={() => setActive(!active)}
    >
      <ContainerIn className="containerIn">
        <Face className="front">
          <Content>
            <Image
              src={image_path}
              alt={skill_name}
              boxSize={{ base: "6", sm: "10" }}
            />
          </Content>
        </Face>
        <Face className="back">
          <Content>
            <Info>
              <Rate>
                {[...Array(5)].map((n, i) => {
                  return (
                    <span key={i}>
                      {i < rate && i + 1 > rate ? (
                        <FaStarHalfAlt />
                      ) : i < rate ? (
                        <FaStar />
                      ) : (
                        <FaRegStar />
                      )}
                    </span>
                  );
                })}
              </Rate>
              <Tooltip>{skill_name}</Tooltip>
            </Info>
          </Content>
        </Face>
      </ContainerIn>
    </Container>
  );
};
export default Diamond;
