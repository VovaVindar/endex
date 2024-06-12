import styles from "./latest-grid.module.css";
import Link from "next/link";
import Image from "next/image";

export default function LatestGrid() {
  return (
    <div className={`${styles["latest-grid"]}`}>
      <Article
        date="Apr 8, 2024"
        title="Navigating Ethics and Privacy in the Digital Age"
        img_id={3}
      />
      <Article
        date="Mar 15, 2024"
        title="Revolutionizing Stock Market Dynamics: The Rise of AI Trading"
        img_id={2}
      />
      <Article
        date="Feb 28, 2024"
        title="Unlocking Opportunities: How Financial AI Empowers Investors"
        img_id={4}
      />
      <Article
        date="Feb 6, 2024"
        title="Democratizing Wealth Management: The Role of AI in Personal Finance"
        img_id={5}
      />
      <Article
        date="Jan 12, 2024"
        title="Navigating Volatility: How AI Keeps Markets on Course"
        img_id={6}
      />
    </div>
  );
}

const Article = ({
  link = "/blog/article",
  alt = "Article cover",
  img_id = 1,
  date = "May 31, 2024",
  title = "Endex AI Breakthrough",
}) => {
  return (
    <div className={`${styles["article"]}`}>
      <Link href={link}>
        <div className={`${styles["article__img"]} border-img`}>
          <Image
            src={`/img/blog/${img_id}.png`}
            alt={alt}
            fill
            sizes="(max-width: 1300px) 30.5vw, 28vw"
            placeholder="blur"
          />
        </div>
        <div className={`${styles["article__text"]}`}>
          <h5 className="text-mono-1 text-color-secondary">{date}</h5>
          <h4 className="text-heading-4">{title}</h4>
        </div>
      </Link>
    </div>
  );
};
