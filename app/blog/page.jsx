import styles from "./blog.module.css";
import Newsletter from "@/components/ui/blog/newsletter";
import FeaturedArticle from "@/components/ui/blog/featured-article";
import LatestGrid from "@/components/ui/blog/latest-grid";
import BlogThree from "@/components/ui/blog-three";

export const metadata = {
  title: "Blog",
};

export default function Blog() {
  return (
    <main
      style={{ padding: "0 var(--page-padding)" }}
      className="text-color-primary"
    >
      <div className={`${styles["hero-container"]}`}>
        <div className={`${styles["hero-left"]}`}>
          <h1 className={`${styles["hero-title"]} text-heading-1`}>
            Rewriting the Future of Finance
          </h1>
          <Newsletter />
        </div>
        <div className={`${styles["hero-right"]}`}>
          <BlogThree />
        </div>
      </div>
      <div className={`${styles["section-divider"]} border-divider`}></div>
      <div className={`${styles["featured-container"]}`}>
        <FeaturedArticle />
      </div>
      <div className={`${styles["section-divider"]} border-divider`}></div>
      <div className={`${styles["latest-container"]}`}>
        <h2 className="text-heading-2">Latest Insights</h2>
        <LatestGrid />
      </div>
    </main>
  );
}
