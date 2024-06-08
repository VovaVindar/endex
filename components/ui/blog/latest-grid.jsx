import styles from "./latest-grid.module.css";
import Link from "next/link";
import Image from "next/image";

export default function LatestGrid() {
  return (
    <div className={`${styles["latest-grid"]}`}>
      <Article
        date="Apr 8, 2024"
        title="Navigating Ethics and Privacy in the Digital Age"
      />
      <Article
        date="Mar 15, 2024"
        title="Revolutionizing Stock Market Dynamics: The Rise of AI Trading"
        img_id={2}
      />
      <Article
        date="Feb 28, 2024"
        title="Unlocking Opportunities: How Financial AI Empowers Investors"
      />
      <Article
        date="Feb 6, 2024"
        title="Democratizing Wealth Management: The Role of AI in Personal Finance"
      />
      <Article
        date="Jan 12, 2024"
        title="Navigating Volatility: How AI Keeps Markets on Course"
      />
    </div>
  );
}

const Article = ({
  link = 'href="/blog/article',
  alt = "Article cover",
  img_id = 1,
  date = "May 31, 2024",
  title = "Endex AI Breakthrough",
}) => {
  return (
    <Link href={link}>
      <div>
        <div className={`${styles["article__img"]}`}>
          <Image src={`/img/blog/${img_id}.png`} alt={alt} fill />
        </div>
        <div className={`${styles["article__text"]}`}>
          <h5 className="text-mono-1 text-color-secondary">{date}</h5>
          <h4 className="text-heading-4">{title}</h4>
        </div>
      </div>
    </Link>
  );
};
