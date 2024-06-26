import LatestArticle from "@/components/ui/navbar/latest-article";
import styles from "./page.module.css";
import { Button } from "@/components/ui/button";
import HomeThree from "@/components/ui/home-three";
import Link from "next/link";
import Dialog from "@/components/ui/dialog";
import Form from "@/components/ui/form/form";

export default function Home() {
  return (
    <main>
      <LatestArticle className={`${styles["root-path-article"]}`} />
      <div className={`${styles["hero-container"]}`}>
        <div className={`${styles["hero-left"]}`}>
          <h1
            className={`${styles["hero-title"]} text-heading-1 text-color-primary`}
          >
            Generative AI for Financial Firms
          </h1>
          <p
            className={`${styles["hero-description"]} text-mono-1 text-color-primary`}
          >
            AI-Native applications built for the future, powered by
            domain-specific Models Optimized for Financial Services.
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
          <div className={`${styles["hero-divider"]} border-divider`}></div>
          <p className="text-mono-1 text-color-primary">
            <span className="text-color-secondary">Our products lines —</span>
            <br />
            <br />
            <span className="text-mono-1-bold">Nova:</span> Autonomous Financial
            Analyst
            <br />
            <br />
            <span className="text-mono-1-bold">Forge:</span> AI-Native Financial
            Intelligence Layer
          </p>
        </div>
        <div className={`${styles["hero-right"]}`}>
          <HomeThree />
        </div>
      </div>
    </main>
  );
}
