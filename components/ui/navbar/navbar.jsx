"use client";

import { useState } from "react";
import { EndexLogo, EndexLogoAnimated } from "@/components/ui/navbar/logo";
import Link from "next/link";
import styles from "./navbar.module.css";
import LatestArticle from "./latest-article";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Footer from "@/components/ui/footer/footer";
import Dialog from "@/components/ui/dialog";
import Form from "@/components/ui/form/form";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className={`${styles["navbar"]}`}>
      <div className={`${styles["navbar-left"]}`}>
        <Link href="/">
          <div className={`${styles["navbar-logo"]}`}>
            <EndexLogoAnimated />
          </div>
        </Link>
        {!pathname.includes("/blog") && (
          <div>
            <Link href="/blog/article" className={`${styles["circle-link"]}`}>
              <LatestArticle />
            </Link>
          </div>
        )}
      </div>
      <div
        className={`${styles["navbar-links"]} text-mono-2 text-color-primary`}
      >
        <div className={`${styles["desktop"]}`}>
          <Link href="/blog" className={`${styles["circle-link"]}`}>
            {pathname.includes("/blog") && <div></div>}
            Blog
          </Link>
          <Link
            href="https://www.linkedin.com/"
            className={`${styles["circle-link"]}`}
          >
            {pathname.includes("/careers") && <div></div>}Careers
          </Link>
          <Link href="https://app.endex.ai/">Sign In</Link>
        </div>
        <div
          className={`${styles["mobile"]} ${
            isOpen ? `${styles["mobile-open"]} no-scroll` : ""
          }`}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${styles["burger-menu"]}`}
          >
            <div className={`${styles["icon-container"]}`}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </button>
          <div className={`${styles["mobile-links-container"]}`}>
            <Link href="/" onClick={() => setIsOpen(false)}>
              <div className={`${styles["navbar-logo"]}`}>
                <EndexLogo />
              </div>
            </Link>
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/blog" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
            <Link href="" onClick={() => setIsOpen(false)}>
              Careers
            </Link>
            <Link href="https://app.endex.ai/" onClick={() => setIsOpen(false)}>
              Sign In
            </Link>
            <Link href="/custom-deployment" onClick={() => setIsOpen(false)}>
              Custom Deployment
            </Link>
            <Dialog
              trigger={
                <Button
                  variant="primary"
                  className={`${styles["navbar-button"]}`}
                >
                  Contact Sales
                </Button>
              }
              content={<Form addHeadline={true} headline="Contact Sales" />}
            />
            <div className={`${styles["footer-container"]}`}>
              <Footer />
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles["navbar-border"]} border-divider`}></div>
    </nav>
  );
}
