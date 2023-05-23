import React from "react";
import User from "./User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faPoll } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
export default function DraftPost() {
  return (
    <section className="draft-post-container">
      <section className="draft-tweet-input-wrapper">
        <div className="draft-post-avatar">
          <img src="https://placehold.co/50x50" alt="" className="avatar" />
        </div>
        <section className="tweet-info">
          <input
            type="text"
            placeholder="What is happening?"
            className="tweet-draft-input"
          ></input>
          <div>
            <ul className="post-options">
              <li>
                <FontAwesomeIcon icon={faImage} />
              </li>
              <li>
                <FontAwesomeIcon icon={faPoll} />
              </li>
              <li>
                <FontAwesomeIcon icon={faFaceSmile} />
              </li>
              <li>
                <FontAwesomeIcon icon={faCalendar} />
              </li>
              <li>
                <FontAwesomeIcon icon={faLocationDot} />
              </li>
            </ul>
            <button type="submit" className="draft-tweet-btn">
              Tweet
            </button>
          </div>
        </section>
      </section>
    </section>
  );
}
