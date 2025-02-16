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
  styling?: string;
};

const KcButton = ({
  icon,
  url,
  path,
  onToggle,
  isToggled,
  type,
  styling,
}: KcButtonProps) => {
  let test = <></>;
  const handleClick = () => {
    if (type === "link" && url) {
      window.open(url, "_blank");
    } else if (type === "path" && path) {
      // window.open(path, "_self");
    } else if (type === "toggle" && onToggle) {
      // Trigger the toggle in the parent component
      onToggle();
    }
  };
  if (type === "path" && path) {
    return (
      <Link
        href={path}
        className={`${styles.kcLinkBtn} ${styling} text-accent bg-primary rounded-lg border-2 border-transparent transition-all duration-300 hover:border-accent hover:shadow-[0_0_8px_2px] hover:shadow-accent focus:outline-none`}
      >
        <FontAwesomeIcon
          icon={icon}
          fixedWidth={true}
          size="lg"
        ></FontAwesomeIcon>
      </Link>
    );
  } else {
    return (
      <button
        className={`${styles.kcLinkBtn} ${styling} text-accent bg-primary rounded-lg border-2 border-transparent transition-all duration-300 hover:border-accent hover:shadow-[0_0_8px_2px] hover:shadow-accent focus:outline-none`}
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
