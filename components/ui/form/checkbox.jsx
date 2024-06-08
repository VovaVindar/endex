import styles from "./checkbox.module.css";

const Checkbox = ({ label, name, required, ariaRequired, handleChange }) => {
  return (
    <div className={`${styles["checkbox-container"]} text-color-primary`}>
      <input
        id={name}
        className={`${styles["checkbox"]} surface-color-tertiary`}
        type="checkbox"
        name={name}
        required={required}
        aria-required={ariaRequired}
        onChange={handleChange}
      />
      <label htmlFor={name} className={`text-body-2`}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
