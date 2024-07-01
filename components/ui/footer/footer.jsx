import Link from "next/link";
import styles from "./footer.module.css";
import LiveIndicator from "./live-indicator";

export default function Footer({ closeMenu }) {
  return (
    <footer className={`${styles["footer"]}`}>
      <LiveIndicator />
      <div
        className={`${styles["footer-links"]} text-mono-2 text-color-secondary`}
      >
        <Link href="/privacy-policy" onClick={closeMenu}>
          Privacy Policy
        </Link>
        <Link href="/terms-of-use" onClick={closeMenu}>
          Terms of Use
        </Link>
      </div>
    </footer>
  );
}
