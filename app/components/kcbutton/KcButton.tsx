"use client";

import Link from "next/link";
import styles from "./KcButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

type KcButtonProps = {
  icon: IconDefinition;
  url?: string; // Optional URL for the 'link' type button
  path?: string; // Optional URL for the 'path' type button
  onToggle?: () => void; // Optional toggle handler for the 'toggle' type button
  isToggled?: boolean; // Optional to track toggle state for the 'toggle' type button
  type: "link" | "toggle" | "path"; // Restrict to only 'link' or 'toggle' types
};

const KcButton = ({
  icon,
  url,
  path,
  onToggle,
  isToggled,
  type,
}: KcButtonProps) => {
  let test = <></>;
  const handleClick = () => {
    if (type === "link" && url) {
      // Open the URL in a new tab
      window.open(url, "_blank");
    } else if (type === "toggle" && onToggle) {
      // Trigger the toggle in the parent component
      onToggle();
    }
  };
  if (type === "path" && path) {
    return (
      <button
        className={`${styles.kcLinkBtn} text-accent bg-primary hover:outline-dotted hover:outline-2 hover:outline-accent shadow-md`}
        onClick={handleClick}
      >
        <Link href={path}>
          <FontAwesomeIcon
            icon={icon}
            fixedWidth={true}
            size="lg"
          ></FontAwesomeIcon>
        </Link>
      </button>
    );
  } else {
    return (
      <button
        className={`${styles.kcLinkBtn} text-accent bg-primary hover:outline-dotted hover:outline-2 hover:outline-accent shadow-md`}
        onClick={handleClick}
      >
        <FontAwesomeIcon
          icon={icon}
          fixedWidth={true}
          size="lg"
        ></FontAwesomeIcon>
      </button>
    );
  }
};

export default KcButton;
