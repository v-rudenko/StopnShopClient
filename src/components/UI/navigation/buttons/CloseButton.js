import React from "react";
import closeIcon from "./styles/images/icon-close.svg";

const CloseButton = (props) => {
  return (
    <img draggable="false" className={props.className} onClick={props.onClick} src={closeIcon} width="24px" height="24px" />
  );
};

export default CloseButton;
