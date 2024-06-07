import styles from "@/app/legal.module.css";

export default function PrivacyPolicy() {
  return (
    <main>
      <div
        className={`${styles["legal-container"]} text-color-primary text-body-1`}
      >
        <h2 className="text-heading-2">Terms of Use</h2>

        <h5 className="text-mono-1">Last Updated: March 14, 2024</h5>
        <p>
          Welcome to Endex—an AI platform designed specifically for financial
          firms. This Privacy Notice explains how Edvise, Inc. (“Endex,” “we,”
          “our,” or “us”) collects, uses, discloses, and otherwise processes
          personal data.
        </p>
        <p>
          This Privacy Notice does not address our privacy practices relating to
          Endex job applicants, employees and other employment-related
          individuals, nor data that is not subject to applicable data
          protection laws (such as deidentified or publicly available
          information). This Privacy Notice is also not a contract and does not
          create any legal rights or obligations not otherwise provided by law.
        </p>

        <h5 className="text-mono-1-bold">
          Our Role in Processing Personal Data
        </h5>
        <p>
          Data protection laws sometimes differentiate between “controllers” and
          “processors” of personal data. A “controller” determines the purposes
          and means (the why and how) of processing personal data. A
          “processor,” which is sometimes referred to as a “service provider,”
          processes personal data on behalf of a controller subject to the
          controller’s instructions.
        </p>
        <p>
          This Privacy Notice describes our privacy practices where we are
          acting as the controller of personal data. However, this Privacy
          Notice does not cover or address how our customers may process
          personal data when they use our services, or how we may process
          personal data on their behalf in accordance with their instructions
          where we are acting as their processor. As a result, we recommend
          referring to the privacy notice of the customer with which you have a
          relationship for information on how they engage processors, like us,
          to process personal data on their behalf. In addition, we are
          generally not permitted to respond to individual requests relating to
          personal data we process on behalf of our customers, so we recommend
          directing any requests to the relevant customer.
        </p>

        <h5 className="text-mono-1-bold">
          Our Collection and Use of Personal Data
        </h5>
        <p>
          The categories of personal data we collect depend on how you interact
          with us and our services. For example, you may provide us your
          personal data directly when you provide us your contact information,
          use our services, register for an account, complete an online
          transaction, participate in an event, contest, sweepstakes, or survey,
          or otherwise contact us or interact with us through our services.
        </p>
        <p>
          We also collect personal data automatically when you interact with our
          websites and other services and may also collect personal data from
          other sources and third parties.
        </p>

        <h5 className="text-mono-1-bold">
          Personal Data Provided by Individuals
        </h5>
        <p>
          We collect the following categories of personal data individuals
          provide us:
        </p>
        <ul>
          <li>
            Contact Information, including first and last name, phone number,
            email address, mailing address, and communication preferences. We
            use this information primarily to fulfill your request or
            transaction, to communicate with you directly, and to send you
            marketing communications in accordance with your preferences.
          </li>
          <li>
            Professional Information, including job title, company name,
            professional background, and the nature of your relationship with
            us. We use this information primarily to fulfill your request or
            transaction, to determine how we communicate with you, to administer
            your account, to provide you with our services, and for customer
            support purposes.
          </li>
          <li>
            Account Information, including first and last name, email address,
            phone number, account credentials or one-time passcodes, transaction
            history, and the history of the use of our services. We use this
            information primarily to administer your account, provide you with
            our services, communicate with you regarding your account and your
            use of our services, and for customer support purposes.
          </li>
          <li>
            Payment Information, including payment card information, billing
            address, and other financial information such as routing and account
            number. Please note that we use third-party payment processors,
            including Stripe, to process payments made to us. We do not retain
            any personally identifiable financial information, such as payment
            card number, you provide these third-party payment providers in
            connection with payments. Rather, all such information is provided
            directly by you to our third-party payment processors. The payment
            processor’s use of your personal data is governed by their privacy
            notice. To view Stripe’s privacy policy, please click here.
          </li>
          <li>
            Event, Contest, Sweepstakes, and Survey Information, including
            information provided when you sign up for an event, enter a contest
            or promotion, complete a survey, or submit a testimonial. We use
            this information primarily to administer and facilitate our
            services, respond to your submission, communicate with you, conduct
            market research, inform our marketing and advertising activities,
            improve and grow our business, and facilitate the related event,
            content, sweepstakes, or survey.
          </li>
          <li>
            Feedback and Support Information, including the contents of custom
            messages sent through the forms, email addresses, or other contact
            information we make available to customers, as well as recordings of
            calls with us, where permitted by law (including through the use of
            automated tools provided by us or our third-party providers). We use
            this information primarily to investigate and respond to your
            inquiries, to communicate with you, and to improve our services. If
            you choose to contact us, we may need additional information to
            fulfill the request or respond to your inquiry. We may provide
            additional privacy disclosures where the scope of the request we
            receive or personal data we require fall outside the scope of this
            Privacy Notice. In that case, the additional privacy disclosures
            will govern how we may process the information you provide at that
            time.
          </li>
        </ul>
      </div>
    </main>
  );
}
