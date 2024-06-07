import Link from "next/link";
import styles from "./footer.module.css";
import LiveIndicator from "./live-indicator";

export default function Footer() {
  return (
    <footer className={`${styles["footer"]}`}>
      <LiveIndicator />
      <div
        className={`${styles["footer-links"]} text-mono-2 text-color-secondary`}
      >
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms-of-use">Terms of Use</Link>
      </div>
    </footer>
  );
}
