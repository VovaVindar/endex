"use client";

import { useState } from "react";
import Input from "@/components/ui/form/input";
import Textarea from "@/components/ui/form/textarea";
import Checkbox from "@/components/ui/form/checkbox";
import Select from "@/components/ui/form/select";
import { Button } from "@/components/ui/button";
import styles from "./form.module.css";

import axios from "axios";

export default function Form({
  addHeadline = false,
  headline = "Contact Sales",
  addClose = false,
  cta = "Submit",
  addDescription = false,
  addChecbox = false,
}) {
  const initialFormData = {
    first_name: "",
    last_name: "",
    email: "",
    description: "",
    firm_type: "",
    acknowledge: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      await axios.post("/api/submit", formData);
      // TODO: the API request should be replaced with the actual API endpoint
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
      setIsLoading(false);
      setFormData(initialFormData); // Reset form fields
    } catch (error) {
      alert(
        "There was an error when submitting the form. Please try again or reach out directly to team@endex.ai."
      );
      console.error(
        "There was an error when submitting the form. Please try again or reach out directly to team@endex.ai.",
        error
      );
      setTimeout(() => {
        setIsSubmitted(false);
        setIsLoading(false);
      }, 500);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles["form-container"]} surface-color-secondary`}
    >
      <div className={`${styles["row"]}`}>
        <Input
          label="First Name"
          name="first_name"
          type="text"
          handleChange={handleChange}
          required
          ariaRequired={true}
          disabled={isSubmitted || isLoading}
        />
        <Input
          label="Last Name"
          name="last_name"
          type="text"
          handleChange={handleChange}
          required
          ariaRequired={true}
          disabled={isSubmitted || isLoading}
        />
      </div>
      <div className={`${styles["row"]}`}>
        <Input
          label="Business Email"
          name="email"
          type="email"
          handleChange={handleChange}
          required
          ariaRequired={true}
          disabled={isSubmitted || isLoading}
        />
      </div>
      <div className={`${styles["row"]}`}>
        <Input
          label="Firm Name"
          name="firm_name"
          type="text"
          handleChange={handleChange}
          required
          ariaRequired={true}
          disabled={isSubmitted || isLoading}
        />
        <Select
          label="Firm Type"
          name="firm_type"
          handleChange={handleChange}
          required
          ariaRequired={true}
          disabled={isSubmitted || isLoading}
          options={[
            "Hedge Fund",
            "Private Equity Firm",
            "Investment Bank",
            "Asset Management Firm",
            "Brokerage Firm",
            "Commercial Bank",
            "Other",
          ]}
        />
      </div>
      {addDescription && (
        <div className={`${styles["row"]}`}>
          <Textarea
            label="Description"
            placeholder="What do need custom deployment for..."
            name="description"
            handleChange={handleChange}
            required
            ariaRequired={true}
            disabled={isSubmitted || isLoading}
          />
        </div>
      )}
      {addChecbox && (
        <div className={`${styles["row"]}`}>
          <Checkbox
            label="I acknowledge that it may take several months and iterative development process."
            name="acknowledge"
            required
            ariaRequired={true}
            disabled={isSubmitted || isLoading}
          />
        </div>
      )}
      <Button variant="form" disabled={isSubmitted || isLoading} type="submit">
        {isLoading ? "Submitting..." : isSubmitted ? "Submitted!" : cta}
      </Button>
      <div aria-live="polite" className="visually-hidden">
        {/* This is for screen readers */}
        {isLoading
          ? "The form is currently being submitted."
          : isSubmitted
          ? "The form has been successfully submitted."
          : ""}
      </div>
    </form>
  );
}
