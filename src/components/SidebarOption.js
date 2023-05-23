import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function SidebarOption(props) {
  const iconStyle = {
    fill: "white",
  };
  return (
    <section className="sidebar-option-container">
      <FontAwesomeIcon icon={props.icon} size="2x" className="icon" />
      <span className="sidebar-opt-text">{props.title}</span>
    </section>
  );
}
