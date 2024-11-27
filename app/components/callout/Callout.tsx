import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import styles from "./Callout.module.css";

type Callout = {
  icon: IconProp;
  text: number;
};

function Callout(callout: { icon: IconProp; text: string }) {
  return (
    <div className={`${styles.callout} bg-subtle`}>
      <FontAwesomeIcon
        icon={callout.icon}
        className={`${styles.calloutIcon} text-white`}
        fixedWidth
      ></FontAwesomeIcon>
      <div className="pl-4 text-white">{callout.text}</div>
    </div>
  );
}

export default Callout;
