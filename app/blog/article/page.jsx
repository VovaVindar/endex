import textStyles from "@/app/styles/text.module.css";
import articleStyles from "./article.module.css";
import Newsletter from "@/components/ui/blog/newsletter";
import Image from "next/image";

export default function Article() {
  return (
    <main>
      <div className={`${textStyles["text-container"]}`}>
        <div className={`${textStyles["text"]} text-color-primary text-body-2`}>
          <div className={`${articleStyles["article-details"]}`}>
            <h5 className="text-mono-1 text-color-secondary">
              Author: Anne Brandes
            </h5>
            <h5 className="text-mono-1 text-color-secondary">May 31, 2024</h5>
          </div>
          <div
            className={`${articleStyles["section-divider"]} border-divider`}
          ></div>
          <h2 className="text-heading-3">Endex AI Breakthrough</h2>
          <p className="text-body-1">
            As artificial intelligence continues to revolutionize the financial
            services industry, from trading algorithms to robo-advisors, it is
            essential to consider the ethical implications of this technological
            advancement.
          </p>
          <div className={`${articleStyles["article-img"]}`}>
            <Image
              src="/img/blog/1.png"
              alt="Article image"
              priority
              fill
              sizes="(max-width: 700px) 100vw, 43vw"
            />
          </div>
          <p>
            While AI has the potential to enhance efficiency, improve
            decision-making, and democratize access to financial services, its
            widespread adoption also raises important ethical considerations
            that must be addressed to ensure that innovation is balanced with
            responsibility.
          </p>
          <p>
            One of the primary ethical concerns surrounding financial AI is
            algorithmic bias – the propensity for AI algorithms to reflect and
            perpetuate existing biases present in the data used to train them.
            Whether it's biases related to race, gender, or socioeconomic
            status, algorithmic bias can lead to unfair or discriminatory
            outcomes, perpetuating inequalities within the financial system.
            Addressing algorithmic bias requires a concerted effort to ensure
            that AI algorithms are trained on diverse and representative
            datasets and are subject to rigorous testing and validation to
            detect and mitigate biases before deployment.
          </p>
          <p>
            Additionally, the increasing reliance on AI in financial
            decision-making raises questions regarding transparency,
            accountability, and trust. As algorithms play an increasingly
            prominent role in shaping market dynamics and managing individuals'
            finances, ensuring transparency and accountability in algorithmic
            decision-making becomes paramount. Investors and consumers have the
            right to understand how AI algorithms are making decisions that
            affect their financial well-being and to hold developers and
            providers accountable for any adverse outcomes resulting from
            algorithmic decisions.
          </p>
          <h4 className="text-heading-4">Privacy Concerns</h4>
          <p>
            Moreover, the proliferation of AI in finance raises concerns
            regarding data privacy and cybersecurity. As AI algorithms rely on
            vast amounts of data to make informed decisions, ensuring the
            privacy and security of sensitive financial information becomes a
            critical priority. Robust data protection measures, including
            encryption, anonymization, and access controls, must be implemented
            to safeguard against unauthorized access, data breaches, and misuse
            of personal financial data.
          </p>
          <p className={`${articleStyles["emphasis"]} text-body-1`}>
            The responsible development and deployment of financial AI require a
            collaborative effort involving stakeholders from across the
            financial services industry.
          </p>
          <p>
            By prioritizing ethical considerations such as algorithmic bias,
            transparency, accountability, and data privacy, we can harness the
            transformative potential of AI to create a more inclusive,
            transparent, and trustworthy financial system that benefits all
            stakeholders.
          </p>
        </div>
        <div style={{ marginTop: "100px" }}>
          <Newsletter />
        </div>
      </div>
    </main>
  );
}
