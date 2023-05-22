import React from "react";
import SidebarOption from "./SidebarOption";
import twitterLogo from "./imgs/twitter-logo.png";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <section className="sidebar-container">
      <img src={twitterLogo} alt="" />
      <section className="options">
        <SidebarOption icon={faHouse} title="Home" />
        <SidebarOption icon={faHashtag} title="Explore" />
        <SidebarOption icon={faBell} title="Notifications" />
        <SidebarOption icon={faEnvelope} title="Messages" />
        <SidebarOption icon={faBookmark} title="Bookmarks" />
        <SidebarOption icon={faList} title="Lists" />
        <SidebarOption icon={faUser} title="Profile" />
        <SidebarOption icon={faEllipsis} title="More" />
      </section>
      <button className="compose-twt-button">Tweet</button>
    </section>
  );
}
