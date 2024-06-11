import styles from "./form.module.css";

const Input = ({
  label,
  placeholder,
  name,
  type,
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
      <input
        id={name}
        className={`${styles["input-container__input"]} text-body-2 surface-color-tertiary text-color-primary border-input`}
        type={type}
        placeholder={placeholder}
        name={name}
        required={required}
        aria-required={ariaRequired}
        maxLength="70"
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
