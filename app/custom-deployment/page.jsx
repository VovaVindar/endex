"use client";

import pageStyles from "@/app/styles/text.module.css";
import formStyles from "@/components/ui/form/form.module.css";
import { useState } from "react";
import Input from "@/components/ui/form/input";

export default function CustomDeployment() {
  const initialFormData = {
    first_name: "",
    last_name: "",
    email: "",
    use_case: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main>
      <div className={`${pageStyles["text-container"]}`}>
        <div className={`${pageStyles["text"]} text-color-primary text-body-2`}>
          <h2 className="text-heading-2" style={{ width: "104%" }}>
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
            className={`${formStyles["form-container"]} ${formStyles["translate"]} surface-color-secondary`}
          >
            <div className={`${formStyles["row"]}`}>
              <Input
                label="First Name"
                name="first_name"
                type="text"
                //handleChange={handleChange}
                required
                ariaRequired={true}
                disabled={isSubmitted || isLoading}
              />
              <Input
                label="Last Name"
                name="last_name"
                type="text"
                //handleChange={handleChange}
                required
                ariaRequired={true}
                disabled={isSubmitted || isLoading}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
