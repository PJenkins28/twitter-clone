import React from "react";
import SidebarOption from "./SidebarOption";
import twitterLogo from "./imgs/twitter-logo.png";
import User from "./User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <section className="sidebar-container">
      <img src={twitterLogo} alt="" className="twitter-logo" />
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
      <button className="compose-twt-btn">Tweet</button>
      <button className="mobile-compose-btn">
        <FontAwesomeIcon icon={faPlus} className="icon mobile" />
      </button>
      <User />
    </section>
  );
}
