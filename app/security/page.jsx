import styles from "./security.module.css";
import Dialog from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Form from "@/components/ui/form/form";
import Link from "next/link";

export const metadata = {
  title: "Security & Privacy",
};

export default function Security() {
  return (
    <main style={{ padding: "0 var(--page-padding)", display: "block" }}>
      <div className={`${styles["hero-container"]} text-color-primary`}>
        <h1 className={`${styles["security-heading"]} text-heading-1`}>
          Security & Privacy
        </h1>
        <p className={`${styles["security-description"]} text-body-1`}>
          Your data is always secure with Endex. We are committed to upholding
          the most rigorous data safeguards and standards, ensuring your
          information remains safe.
        </p>
        <div className={`${styles["hero-btn-container"]}`}>
          <Dialog
            trigger={<Button variant="primary">Contact Sales</Button>}
            content={<Form addHeadline={true} headline="Contact Sales" />}
          />
          <Link href="/custom-deployment">
            <Button variant="secondary" tabIndex="-1">
              Custom Deployment
            </Button>
          </Link>
        </div>
      </div>
      <div className={`${styles["standards-container"]}`}>
        <div className={`${styles["security-border"]} border-divider`}></div>
        <div className={`${styles["standards-list"]}`}>
          <h2 className={`${styles["standards-heading"]} text-heading-2`}>
            Endex Security Standards
          </h2>
          <div className={`${styles["standards-grid"]}`}>
            <div className="surface-color-secondary">
              <h4 className="text-heading-4">Privacy Concerns</h4>
              <ul className="text-body-2">
                <li>
                  Endex is audited and penetration tested frequently, and is
                  SOCII, ISO27001, and FIPS-240 standard encrypted end to end.
                </li>
                <li>Point 2</li>
                <li>Point 3</li>
              </ul>
            </div>
            <div className="surface-color-secondary">
              <h4 className="text-heading-4">Cloud</h4>
              <ul className="text-body-2">
                <li>We use AWS cloud</li>
                <li>Point 2</li>
                <li>Point 3</li>
              </ul>
            </div>
            <div className="surface-color-secondary">
              <h4 className="text-heading-4">Encryption</h4>
              <ul className="text-body-2">
                <li>Everything is encrypted</li>
                <li>Some AES thing when we have it</li>
                <li>Point 3</li>
              </ul>
            </div>
            <div className="surface-color-secondary">
              <h4 className="text-heading-4">Custom Deployments</h4>
              <ul className="text-body-2">
                <li>We do custom deployments</li>
                <li>Point 2</li>
                <li>Point 3</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`${styles["security-border"]} border-divider`}></div>
      </div>
    </main>
  );
}
