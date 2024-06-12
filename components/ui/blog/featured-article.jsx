import { Button } from "@/components/ui/button";
import styles from "./featured-article.module.css";
import Link from "next/link";
import Image from "next/image";
import imgSrc from "../../../public/img/blog/1.png";

export default function FeaturedArticle() {
  return (
    <div className={`${styles["featured-article"]}`}>
      <div className={`${styles["featured-article__text"]}`}>
        <h5 className="text-mono-1 text-color-secondary">May 31, 2024</h5>
        <div>
          <h3 className="text-heading-3">Endex AI Breakthrough</h3>
          <p className="text-body-1">
            As artificial intelligence continues to revolutionize the financial
            services industry, from trading algorithms to robo-advisors, it is
            essential to consider the ethical implications of this technological
            advancement.
          </p>
        </div>
        <Link href="/blog/article">
          <Button variant="secondary" tabIndex="-1">
            Read
          </Button>
        </Link>
      </div>
      <div className={`${styles["featured-article__img"]} border-img`}>
        <Image
          src={imgSrc}
          alt="Alt text"
          priority
          fill
          sizes="40vw"
          placeholder="blur"
        />
      </div>
    </div>
  );
}
