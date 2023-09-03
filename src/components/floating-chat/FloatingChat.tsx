import React from "react";
import FloatingWhatsApp from "react-floating-whatsapp";
import "react-floating-whatsapp/dist/index.css";
import ContainerFloatingChat from "./FloatingChat.styles";
import logo from "../../images/logo.png";

const FloatingChat = () => (
  <ContainerFloatingChat>
    <FloatingWhatsApp
      className="container-button"
      phoneNumber="+19793303975"
      accountName="ArieldRio"
      avatar={logo}
      chatMessage="Hello there! 🤝
      How can I help?"
      darkMode
      allowClickAway
      allowEsc
    />
  </ContainerFloatingChat>
);

export default FloatingChat;
