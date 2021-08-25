import React from "react";
import FloatingWhatsApp from "react-floating-whatsapp";
import "react-floating-whatsapp/dist/index.css";
import ContainerFloatingChat from "./FloatingChat.styles";
import logo from "../../images/logo.png";

const FloatingChat = () => (
  <ContainerFloatingChat>
    <FloatingWhatsApp
      className="container-button"
      phoneNumber="+5358377336"
      accountName="ArieldRio"
      avatar={logo}
      chatMessage="Hello, what's up 😀, text me and we'll get in touch quickly."
      darkMode
      allowClickAway
      allowEsc
    />
  </ContainerFloatingChat>
);

export default FloatingChat;
