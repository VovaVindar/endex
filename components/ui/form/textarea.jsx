import styles from "./form.module.css";

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
      <label htmlFor={name} className={`text-mono-1`}>
        {label}
      </label>
      <textarea
        id={name}
        className={`${styles["input-container__textarea"]} text-body-2 surface-color-tertiary`}
        placeholder={placeholder}
        name={name}
        required={required}
        aria-required={ariaRequired}
        maxLength="2999"
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default Textarea;
