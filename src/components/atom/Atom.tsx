import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { AtomContainer, AtomWrapper, Electron } from "./Atom.styles";

const Atom = ({ active, handleClick }) => {
  return (
    <AtomContainer>
      <AtomWrapper active={active} onClick={handleClick}>
        <Electron active={active} />
        <Electron active={active} />
        <Electron active={active} />
      </AtomWrapper>
    </AtomContainer>
  );
};

export default Atom;
