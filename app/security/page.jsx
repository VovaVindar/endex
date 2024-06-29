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
      <div className={`${styles["hero-container"]}`}>
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
    </main>
  );
}
