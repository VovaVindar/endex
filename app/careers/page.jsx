import styles from "./careers.module.css";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Careers",
};

export default function Careers() {
  return (
    <main
      className={`text-color-primary ${styles["careers-container"]}`}
      style={{ padding: "0 var(--page-padding)" }}
    >
      <h1 className={`${styles["careers-heading"]} text-heading-1`}>
        Help Shape the Future of Finance
      </h1>
      <p className={`${styles["careers-description"]} text-body-1`}>
        Be part of a dynamic team that is revolutionizing financial analysis
        with cutting-edge AI technology. Together, let's explore new frontiers
        and drive innovation in the financial world.
      </p>
      <div className={`${styles["careers-table"]}`}>
        <p className="text-mono-1-bold">Open Roles:</p>
        <div className="text-mono-1">
          <TableRow link={"https://www.linkedin.com/company/endexai/jobs/"}>
            <div className={`${styles["table-cell"]}`}>
              Director of Machine Learning
            </div>
            <div className={`${styles["table-cell"]}`}>NYC</div>
          </TableRow>
          <TableRow link={"https://www.linkedin.com/company/endexai/jobs/"}>
            <div className={`${styles["table-cell"]}`}>UI/UX Designer</div>
            <div className={`${styles["table-cell"]}`}>NYC</div>
          </TableRow>
          <TableRow link={"https://www.linkedin.com/company/endexai/jobs/"}>
            <div className={`${styles["table-cell"]}`}>Data Scientist</div>
            <div className={`${styles["table-cell"]}`}>Silicon Valley</div>
          </TableRow>
          <TableRow link={"https://www.linkedin.com/company/endexai/jobs/"}>
            <div className={`${styles["table-cell"]}`}>Software Engineer</div>
            <div className={`${styles["table-cell"]}`}>Silicon Valley</div>
          </TableRow>
        </div>
      </div>
    </main>
  );
}

function TableRow({ children, link }) {
  return (
    <Link href={link} className={`${styles["table-row"]}`}>
      {children}
      <div className={`${styles["table-cell"]}`}>
        <div>Apply</div>
        <div className={`${styles["table-arrow"]}`}>
          <Image
            src="/img/icons/table-link.svg"
            alt="Arrow Icon"
            fill
            sizes="19px"
          />
        </div>
      </div>
      <div className={`${styles["table-border"]} border-divider`}></div>
    </Link>
  );
}
