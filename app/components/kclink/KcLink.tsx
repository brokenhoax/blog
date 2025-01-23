"use client";

import React, { ReactNode, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import {
  faLink,
  faCaretDown,
  faCaretUp,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../kclink/KcLink.module.css";

type KcProps = {
  webLink: string;
  productDescription: string;
  hideAmazon: boolean;
  elementId: string;
  children: ReactNode;
};

const KcLink = ({
  webLink,
  productDescription,
  hideAmazon,
  elementId,
  children,
}: KcProps) => {
  const [toggled, setToggled] = useState(true);
  let icon = faLink;
  if (!hideAmazon) {
    icon = faAmazon;
  }

  function handleClick() {
    setToggled(!toggled);
    console.log(toggled);
  }

  if (!toggled) {
    return (
      <div className={`${styles.kcLinkWrapper}`} id={elementId}>
        <a
          href={webLink}
          className={`${styles.kcLinkCollapsed} bg-subtle`}
          target="_blank"
        >
          <div className={`${styles.kcLinkDescription} hover:text-accent`}>
            <FontAwesomeIcon
              icon={icon}
              fixedWidth={true}
              size="lg"
              className={`${styles.kcLinkIcon}`}
            ></FontAwesomeIcon>
            <div className={`${styles.productDescription} text-accent`}>
              {productDescription}
            </div>
          </div>
          <button className={`${styles.kcLinkBtn} bg-accent hover:text-white`}>
            <FontAwesomeIcon
              icon={faShoppingCart}
              fixedWidth={true}
              size="sm"
            ></FontAwesomeIcon>
          </button>
        </a>
        {/* <button
          onClick={() => handleClick()}
          className={`${styles.teaser} bg-accent`}
        >
          <FontAwesomeIcon
            icon={faCaretUp}
            fixedWidth={true}
            size="xs"
            className={`${styles.teaserLinkIcon} text-white`}
          ></FontAwesomeIcon>
        </button> */}
      </div>
    );
  }

  if (toggled) {
    return (
      <div className={`${styles.kcLinkWrapper}`} id={elementId}>
        <a
          href={webLink}
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
