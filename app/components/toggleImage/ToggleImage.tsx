"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./ToggleImage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function ToggleImage({ params }) {
  const [toggled, setToggled] = useState(false);

  function handleClick() {
    setToggled(!toggled);
  }

  if (!toggled) {
    return (
      <div
        onClick={() => handleClick()}
        className={`${styles.imageToggle} text-accent`}
      >
        {" "}
        <span className={`${styles.toggleStyles}`}>
          <FontAwesomeIcon icon={faCaretRight} fixedWidth></FontAwesomeIcon>
          <div className={`${styles.toggleText}`}>Screenshot</div>
        </span>
      </div>
    );
  }

  if (toggled) {
    return (
      <div
        onClick={() => handleClick()}
        className={`${styles.imageToggle} text-accent`}
      >
        <span className={`${styles.toggleStyles}`}>
          <FontAwesomeIcon icon={faCaretDown} fixedWidth></FontAwesomeIcon>
          <div className={`${styles.toggleText}`}>Screenshot</div>
        </span>
        <Image
          className={`${styles.imageStyles}`}
          src={params.imagePath}
          width={params.width}
          height={params.height}
          sizes={params.sizes}
          style={params.style}
          alt={params.imageAltText}
          decoding="sync"
        ></Image>
      </div>
    );
  }
}

export default ToggleImage;
