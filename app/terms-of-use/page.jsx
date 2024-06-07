import styles from "@/app/styles/text.module.css";
import Link from "next/link";

export default function TermsOfUse() {
  return (
    <main>
      <div className={`${styles["text-container"]}`}>
        <div className={`${styles["text"]} text-color-primary text-body-2`}>
          <h2 className="text-heading-2">Terms of Use</h2>

          <h6 className={`${styles["no-padding-top"]} text-mono-1`}>
            Last Updated: March 6, 2024
          </h6>
          <p>
            Welcome to Endex.ai a website of Edvise Inc. (“Company”, “Endex”,
            “we,” or “us”). This page explains the terms by which you may use
            our website (the “Site”). By accessing or using the Site, you
            signify that you have read, understood, and agree to be bound by
            these Terms of Use (“Agreement”) and to the collection and use of
            your information as set forth in our Privacy Policy at{" "}
            <Link href="/privacy-policy">www.endex.ai/privacy-policy</Link>.
            Company reserves the right to make unilateral modifications to these
            terms and will provide notice of these changes as described below.
            This Agreement applies to all visitors and others who access the
            Site (“Users”).
          </p>
          <p>
            Please read this Agreement carefully to ensure that you understand
            each provision. This agreement contains a mandatory individual
            arbitration and class action/jury trial waiver provision that
            requires the use of arbitration on an individual basis to resolve
            disputes, rather than jury trials or class actions.
          </p>

          <h5 className={`${styles["no-padding-bottom"]} text-mono-1-bold`}>
            1. Use of Our Site
          </h5>
          <h6 className="text-mono-1">A.  Eligibility</h6>
          <p>
            This is a contract between you and Company. You must read and agree
            to these terms before using the Site. If you do not agree, you may
            not use the Site. You may use the Site only if you can form a
            binding contract with Company, and only in compliance with this
            Agreement and all applicable local, state, national, and
            international laws, rules and regulations. Any use or access to the
            Site by anyone under 13 is strictly prohibited and in violation of
            this Agreement. The Site is not available to any Users previously
            removed from the Site by Company.
          </p>
          <h6 className="text-mono-1">B. Access to the Site</h6>
          <p>
            Subject to the terms and conditions of this Agreement, you are
            hereby granted a non-exclusive, limited, non-transferable, freely
            revocable license to use the Site for your personal, noncommercial
            use only and as permitted by the features of the Site. Company
            reserves all rights not expressly granted herein in the Site and the
            Company Content (as defined below). Company may terminate this
            license at any time for any reason or no reason.
          </p>
          <h6 className="text-mono-1">C. Site Rules</h6>
          <p>
            You agree not to engage in any of the following prohibited
            activities: (i) copying, distributing, or disclosing any part of the
            Site in any medium, including without limitation by any automated or
            non-automated “scraping”; (ii) using any automated system, including
            without limitation “robots,” “spiders,” “offline readers,” etc., to
            access the Site in a manner that sends more request messages to the
            Company servers than a human can reasonably produce in the same
            period of time by using a conventional on-line web browser (except
            that Company grants the operators of public search engines revocable
            permission to use spiders to copy publicly available materials from
            Company.com for the sole purpose of and solely to the extent
            necessary for creating publicly available searchable indices of the
            materials, but not caches or archives of such materials);
            (iii) transmitting spam, chain letters, or other unsolicited email;
            (iv) attempting to interfere with, compromise the system integrity
            or security or decipher any transmissions to or from the servers
            running the Site; (v) taking any action that imposes, or may impose
            at our sole discretion an unreasonable or disproportionately large
            load on our infrastructure; (vi) uploading invalid data, viruses,
            worms, or other software agents through the Site; (vii) collecting
            or harvesting any personally identifiable information, including
            account names, from the Site; (viii) using the Site for any
            commercial solicitation purposes; (ix) impersonating another person
            or otherwise misrepresenting your affiliation with a person or
            entity, conducting fraud, hiding or attempting to hide your
            identity; (x) interfering with the proper working of the Site; (xi)
            accessing any content on the Site through any technology or means
            other than those provided or authorized by the Site; or (xii)
            bypassing the measures we may use to prevent or restrict access to
            the Site, including without limitation features that prevent or
            restrict use or copying of any content or enforce limitations on use
            of the Site or the content therein.
          </p>
          <p>
            Accessing any audiovisual content that may be available on the Site
            for any purpose or in any manner other than Streaming (as defined
            below) is expressly prohibited unless explicitly permitted by the
            functionality of the Site. “Streaming” means a contemporaneous
            digital transmission of an audiovisual work via the Internet from
            the Site to a User’s device in such a manner that the data is
            intended for real-time viewing and not intended to be copied,
            stored, permanently downloaded, or redistributed by the User.
          </p>
          <p>
            We may, without prior notice, change the Site; stop providing the
            Site or features of the Site, to you or to Users generally; or
            create usage limits for the Site. We may permanently or temporarily
            terminate or suspend your access to the Site without notice and
            liability for any reason, including if in our sole determination you
            violate any provision of this Agreement, or for no reason. Upon
            termination for any reason or no reason, you continue to be bound by
            this Agreement.
          </p>
          <h5 className="text-mono-1-bold">2. Our Proprietary Rights</h5>
        </div>
      </div>
    </main>
  );
}
