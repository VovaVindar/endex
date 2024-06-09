import styles from "./select.module.css";

const Select = ({
  label = "Select",
  name,
  required,
  ariaRequired,
  handleChange,
  options,
}) => {
  return (
    <div className={`${styles["select-container"]} text-color-primary`}>
      {label && (
        <label htmlFor={name} className={`text-mono-1`}>
          {label}
        </label>
      )}
      <select
        id={name}
        onChange={handleChange}
        required={required}
        aria-required={ariaRequired}
        className={`${styles["select-container__select"]} surface-color-tertiary text-body-2`}
      >
        <option value="" defaultValue className="text-color-secondary">
          — Select —
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className={`${styles["select-container__arrow"]}`} />
    </div>
  );
};

export default Select;
