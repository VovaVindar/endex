import styles from "./form.module.css";
import Image from "next/image";

const Textarea = ({
  label,
  placeholder,
  name,
  required,
  ariaRequired,
  handleChange,
}) => {
  return (
    <div className={`${styles["input-container"]} text-color-primary`}>
      {label && (
        <label htmlFor={name} className={`text-mono-1`}>
          {label}
        </label>
      )}
      <div
        className={`${styles["input-container__textarea-resizer-bg"]}`}
      ></div>
      <div className={`${styles["input-container__textarea-resizer"]}`}>
        <Image src="/img/icons/resize.svg" alt="Resize" fill sizes="20px" />
      </div>
      <textarea
        id={name}
        className={`${styles["input-container__textarea"]} text-body-2 surface-color-tertiary`}
        placeholder={placeholder}
        name={name}
        required={required}
        aria-required={ariaRequired}
        maxLength="2999"
        onChange={handleChange}
        rows={8}
      ></textarea>
    </div>
  );
};

export default Textarea;
