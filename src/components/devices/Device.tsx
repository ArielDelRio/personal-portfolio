import React from "react";
import Ipad from "./Ipad";
import IphoneX from "./IphoneX";
import Macbook from "./Macbook";

export interface DeviceProps {
  type: "MACBOOK" | "IPAD" | "IPHONEX";
}

const Device: React.FC<DeviceProps> = ({ type, children }) => {
  switch (type) {
    case "MACBOOK":
      return <Macbook>{children}</Macbook>;
    case "IPAD":
      return <Ipad>{children}</Ipad>;
    case "IPHONEX":
      return <IphoneX>{children}</IphoneX>;
  }
};

export default Device;
