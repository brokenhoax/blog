"use client";

import React, { ReactNode, useState } from "react";
import KcButton from "../kcbutton/KcButton";
import {
  faCaretDown,
  faCaretLeft,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../kclink/KcLink.module.css";

type KcProps = {
  webLink: string;
  productDescription: string;
  hideLink: boolean;
  elementId: string;
  children: ReactNode;
};

const KcLink = ({
  webLink,
  productDescription,
  hideLink,
  elementId,
  children,
}: KcProps) => {
  const [toggled, setToggled] = useState(true);

  function handleClick() {
    setToggled(!toggled);
    console.log(toggled);
  }

  let AmazonLinkButton = <></>;
  if (!hideLink) {
    AmazonLinkButton = (
      <KcButton icon={faShoppingCart} type="link" url={webLink}></KcButton>
    );
  }
  if (!toggled) {
    return (
      <div className={`${styles.kcLinkWrapper}`} id={elementId}>
        <div className={`${styles.kcLinkCollapsed} bg-subtle`}>
          <div className={`${styles.kcLinkDescription} text-accent`}>
            <div className={`${styles.productDescription} text-accent`}>
              {productDescription}
            </div>
          </div>
          <div className={`${styles.kcLinkButtons}`}>
            {/* Amazon Associate Link */}
            {AmazonLinkButton}
            {/* Open Text Box */}
            <KcButton
              icon={faCaretLeft}
              isToggled={toggled}
              onToggle={handleClick}
              type="toggle"
            ></KcButton>
          </div>
        </div>
      </div>
    );
  }

  if (toggled) {
    return (
      <div className={`${styles.kcLinkWrapper}`} id={elementId}>
        <div className={`${styles.kcLinkCollapsed} bg-subtle`}>
          <div className={`${styles.kcLinkDescription} text-accent`}>
            <div className={`${styles.productDescription} text-accent`}>
              {productDescription}
            </div>
          </div>
          <div className={`${styles.kcLinkButtons}`}>
            {/* Amazon Associate Link */}
            {AmazonLinkButton}
            {/* Close Text Box */}
            <KcButton
              icon={faCaretDown}
              isToggled={toggled}
              onToggle={handleClick}
              type="toggle"
            ></KcButton>
          </div>
        </div>
        <div className={`${styles.teaserBody} text-tertiary`}>{children}</div>
      </div>
    );
  }
};

export default KcLink;
