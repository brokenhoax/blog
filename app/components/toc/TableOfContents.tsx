"use client";

import React, { useState } from "react";
import styles from "./TableOfContents.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";

function TableOfContents({ params, length }) {
  let test = false;
  if (length > 5) {
    test = false;
  } else {
    test = true;
  }
  const [toggled, setToggled] = useState(test);

  function handleClick() {
    setToggled(!toggled);
  }

  if (!toggled) {
    return (
      <div>
        {/* Divider */}
        <div className="divider border-b border-accent"></div>
        {/* TOC Toggle */}
        <div
          onClick={() => handleClick()}
          className={`${styles.tocCollapsed} bg-primary border border-accent text-accent`}
        >
          <div className={`${styles.tocHeader}`}>
            <FontAwesomeIcon icon={faList} fixedWidth={true}></FontAwesomeIcon>
            Table of Contents
          </div>
          <FontAwesomeIcon icon={faCaretLeft} fixedWidth></FontAwesomeIcon>
        </div>
        {/* Divider */}
        <div className="divider border-b border-accent"></div>
      </div>
    );
  }

  if (toggled) {
    return (
      <div>
        {/* Divider */}
        <div className="divider border-b border-accent"></div>
        {/* TOC Toggle */}
        <div className={`${styles.tocWrapper} text-accent relative`}>
          {/* Image Header */}
          <span
            onClick={() => handleClick()}
            className={`${styles.tocExpanded} bg-subtle`}
          >
            <div className={`${styles.tocHeader}`}>
              <FontAwesomeIcon icon={faList} fixedWidth></FontAwesomeIcon>
              Table of Contents
              <div className={`${styles.toggleText} text-white`}>
                {params.imageAltText}
              </div>
            </div>
            <FontAwesomeIcon icon={faCaretDown} fixedWidth></FontAwesomeIcon>
          </span>
        </div>
        {params}
        {/* Divider */}
        <div className="divider border-b border-accent"></div>
      </div>
    );
  }
}

export default TableOfContents;
