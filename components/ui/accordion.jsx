"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./Accordion.module.css";

const Accordion = ({ items }) => {
  const [activePanel, setActivePanel] = useState(null);
  const panelRefs = useRef([]);

  const togglePanel = (panel) => {
    setActivePanel(activePanel === panel ? null : panel);
  };

  useEffect(() => {
    panelRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.maxHeight =
          activePanel === index ? `${ref.scrollHeight}px` : "0";
      }
    });
  }, [activePanel]);

  return (
    <div
      style={{ width: "100%" }}
      className="text-color-primary"
      role="tablist"
      aria-multiselectable="true"
    >
      {items.map((item, index) => (
        <div className={styles["panel"]} key={index}>
          <div role="tab">
            <h4 className={`text-heading-3`}>
              <button
                className={styles["panel-heading"]}
                aria-expanded={activePanel === index}
                onClick={() => togglePanel(index)}
              >
                {item.title}
              </button>
            </h4>
          </div>
          <div
            ref={(el) => (panelRefs.current[index] = el)}
            className={`${styles["panel-collapse"]} ${
              activePanel === index ? styles.in : ""
            }`}
            role="tabpanel"
            aria-labelledby={`heading${index}`}
          >
            <div className={`${styles["panel-body"]} text-body-1`}>
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
