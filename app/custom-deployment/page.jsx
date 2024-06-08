import textStyles from "@/app/styles/text.module.css";
import deploymentStyles from "./custom-deployment.module.css";
import Form from "@/components/ui/form/form";

export default function CustomDeployment() {
  return (
    <main>
      <div className={`${textStyles["text-container"]}`}>
        <div className={`${textStyles["text"]} text-color-primary text-body-2`}>
          <h2 className={`${textStyles["deployment-headline"]} text-heading-2`}>
            Custom Deployment
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <div
            className={`${deploymentStyles["form-translate"]} ${deploymentStyles["form-vertical-margin"]}`}
          >
            <Form
              addHeadline={false}
              addClose={false}
              cta="Submit"
              addDescription={true}
              addChecbox={true}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
