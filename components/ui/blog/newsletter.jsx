"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import styles from "./newsletter.module.css";

import axios from "axios";

export default function Newsletter() {
  const initialFormData = {
    newsletter_email: "",
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
      await axios.post("/api/newsletter", formData);
      // TODO: the API request should be replaced with the actual API endpoint
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
      setIsLoading(false);
      setFormData(initialFormData); // Reset form fields
    } catch (error) {
      alert("There was an error when submitting the email. Please try again.");
      console.error(
        "There was an error when submitting the email. Please try again.",
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
      className={`${styles["newsletter-container"]}`}
    >
      <NewsletterInput
        placeholder={"Get Our Newsletter"}
        name="newsletter_email"
        type="email"
        handleChange={handleChange}
        required
        ariaRequired={true}
        disabled={isSubmitted || isLoading}
      />
      <Button
        variant="primary"
        disabled={isSubmitted || isLoading}
        type="submit"
      >
        {isLoading
          ? "Subscribing..."
          : isSubmitted
          ? "Subscribed!"
          : "Subscribe"}
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

const NewsletterInput = ({
  placeholder,
  name,
  type,
  required,
  ariaRequired,
  handleChange,
}) => {
  return (
    <input
      id={name}
      className={`${styles["newsletter-input"]} text-mono-1`}
      style={{
        backgroundColor: "var(--primitive-color-endex-100-alpha-40)",
      }}
      type={type}
      placeholder={placeholder}
      name={name}
      required={required}
      aria-required={ariaRequired}
      maxLength="70"
      onChange={handleChange}
    />
  );
};
