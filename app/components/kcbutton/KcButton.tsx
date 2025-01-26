"use client";

import styles from "./KcButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

type KcButtonProps = {
  icon: IconDefinition;
  url?: string; // Optional URL for the 'link' type button
  onToggle?: () => void; // Optional toggle handler for the 'toggle' type button
  isToggled?: boolean; // Optional to track toggle state for the 'toggle' type button
  type: "link" | "toggle"; // Restrict to only 'link' or 'toggle' types
};

const KcButton = ({ icon, url, onToggle, isToggled, type }: KcButtonProps) => {
  const handleClick = () => {
    if (type === "link" && url) {
      // Open the URL in a new tab
      window.open(url, "_blank");
    } else if (type === "toggle" && onToggle) {
      // Trigger the toggle in the parent component
      onToggle();
    }
  };
  return (
    <button
      className={`${styles.kcLinkBtn} text-accent bg-primary hover:outline-dotted hover:outline-2 hover:outline-accent`}
      onClick={handleClick}
    >
      <FontAwesomeIcon
        icon={icon}
        fixedWidth={true}
        size="sm"
        className={`${styles.amazonAssociate}`}
      ></FontAwesomeIcon>
    </button>
  );
};

export default KcButton;
