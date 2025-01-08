"use client";

import React, { ReactNode, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import {
  faLink,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../kclink/KcLink.module.css";

type KcProps = {
  link: string;
  productDescription: string;
  hideAmazon: boolean;
  children: ReactNode;
};

const KcLink = ({
  link,
  productDescription,
  hideAmazon,
  children,
}: KcProps) => {
  const [toggled, setToggled] = useState(false);
  let amazon = "";
  let icon = faLink;
  if (!hideAmazon) {
    amazon = "";
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
          href={link}
          className={`${styles.kcLinkCollapsed} bg-subtle hover:text-accent`}
          target="_blank"
        >
          <FontAwesomeIcon
            icon={icon}
            fixedWidth={true}
            size="lg"
            className={`${styles.kcLinkIcon}`}
          ></FontAwesomeIcon>
          <span className={`${styles.productDescription} text-accent`}>
            {productDescription}
          </span>
          <span>&nbsp;{amazon}</span>
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
          href={link}
          className={`${styles.kcLinkExpanded} bg-subtle hover:text-accent`}
          target="_blank"
        >
          <FontAwesomeIcon
            icon={icon}
            fixedWidth={true}
            size="lg"
            className={`${styles.kcLinkIcon}`}
          ></FontAwesomeIcon>
          <span className="text-accent">{productDescription}</span>
          <span>&nbsp;{amazon}</span>
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
        <div className={`${styles.teaserBody} text-tertiary`}>{children}</div>
      </div>
    );
  }
};

export default KcLink;
