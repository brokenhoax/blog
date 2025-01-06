import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import styles from "../amazonAssociateLink/AmazonAssociateLInk.module.css";

type AmazonAssociateLink = {
  link: string;
  productText: string;
  hideMention: boolean;
};

function AmazonAssociateLink(AmazonAssociateLink: {
  link: string;
  productText: string;
  hideMention: boolean;
}) {
  let mention = "";
  let icon = faLink;
  if (!AmazonAssociateLink.hideMention) {
    mention = "(Amazon Associate)";
    icon = faAmazon;
  }

  return (
    <a
      href={AmazonAssociateLink.link}
      className={`${styles.amazonLink} bg-subtle hover:text-accent`}
      target="_blank"
    >
      <FontAwesomeIcon
        icon={icon}
        fixedWidth={true}
        size="lg"
        className={`${styles.amazonLinkIcon}`}
      ></FontAwesomeIcon>
      <span className="text-accent">{AmazonAssociateLink.productText}</span>
      <span>&nbsp;{mention}</span>
    </a>
  );
}

export default AmazonAssociateLink;
