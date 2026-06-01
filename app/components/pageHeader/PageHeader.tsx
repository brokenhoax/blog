import type { ReactNode } from "react";
import styles from "./PageHeader.module.css";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  date?: ReactNode;
  titleClassName?: string;
  dateClassName?: string;
  titleId?: string;
  subtitleId?: string;
  /** When false, the main title renders as h2 (e.g. chat page). */
  useH1?: boolean;
  /** Article pages use a divider under the header; homepage does not. */
  showDivider?: boolean;
};

export default function PageHeader({
  title,
  subtitle,
  date,
  titleClassName = "",
  dateClassName = "dateStamp text-accent",
  titleId = "top",
  subtitleId,
  useH1 = true,
  showDivider = true,
}: PageHeaderProps) {
  const TitleTag = useH1 ? "h1" : "h2";

  return (
    <header className={styles.pageHeader}>
      <div className={styles.dotField} aria-hidden="true" />
      <div className={styles.dotFieldSoft} aria-hidden="true" />
      <div className={styles.content}>
        <TitleTag
          {...(titleId ? { id: titleId } : {})}
          className={`text-accent ${titleClassName}`.trim()}
        >
          {title}
        </TitleTag>
        {subtitle ? <h2 id={subtitleId}>{subtitle}</h2> : null}
        {date ? <p className={dateClassName}>{date}</p> : null}
      </div>
      {showDivider ? <div className={styles.headerDivider} /> : null}
    </header>
  );
}
