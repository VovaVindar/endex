"use client";
import styles from "./careers.module.css";

export default function TableRow({ children, link }) {
  const handleClick = () => {
    window.location.href = { link };
  };

  return (
    <tr className={`${styles["table-row"]}`} onClick={handleClick}>
      {children}
      <td>Apply</td>
      <div className="border-divider"></div>
    </tr>
  );
}
