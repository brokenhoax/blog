"use client";

import React, { ReactElement, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import {
  faLink,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../KcLink/KcLink.module.css";

type KcLink = {
  link: string;
  productDescription: string;
  productText: any;
  hideMention: boolean;
};

function KcLink(KcLink: {
  link: string;
  productDescription: string;
  productText: any;
  hideMention: boolean;
}) {
  const [toggled, setToggled] = useState(false);
  let mention = "";
  let icon = faLink;
  if (!KcLink.hideMention) {
    mention = "(Amazon Associate)";
    icon = faAmazon;
  }

  function handleClick() {
    setToggled(!toggled);
    console.log(toggled);
  }

  if (!toggled) {
    return (
      <div className={`${styles.kcLinkWrapper}`}>
        <a
          href={KcLink.link}
          className={`${styles.kcLinkCollapsed} bg-subtle hover:text-accent`}
          target="_blank"
        >
          <FontAwesomeIcon
            icon={icon}
            fixedWidth={true}
            size="lg"
            className={`${styles.kcLinkIcon}`}
          ></FontAwesomeIcon>
          <span className="text-accent">{KcLink.productDescription}</span>
          <span>&nbsp;{mention}</span>
        </a>
        <button
          onClick={() => handleClick()}
          className={`${styles.teaser} bg-accent`}
        >
          <FontAwesomeIcon
            icon={faCaretUp}
            fixedWidth={true}
            size="xs"
            className={`${styles.teaserLinkIcon} text-white`}
          ></FontAwesomeIcon>
        </button>
      </div>
    );
  }

  if (toggled) {
    return (
      <div className={`${styles.kcLinkWrapper}`}>
        <a
          href={KcLink.link}
          className={`${styles.kcLinkExpanded} bg-subtle hover:text-accent`}
          target="_blank"
        >
          <FontAwesomeIcon
            icon={icon}
            fixedWidth={true}
            size="lg"
            className={`${styles.kcLinkIcon}`}
          ></FontAwesomeIcon>
          <span className="text-accent">{KcLink.productDescription}</span>
          <span>&nbsp;{mention}</span>
        </a>
        <button
          onClick={() => handleClick()}
          className={`${styles.teaser} bg-accent`}
        >
          {" "}
          <FontAwesomeIcon
            icon={faCaretDown}
            fixedWidth={true}
            size="xs"
            className={`${styles.teaserLinkIcon}`}
          ></FontAwesomeIcon>
        </button>
        <div className={`${styles.teaserBody} text-tertiary`}>
          {KcLink.productText}
        </div>
      </div>
    );
  }
}

export default KcLink;
