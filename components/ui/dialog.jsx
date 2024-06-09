"use client";

import styles from "./dialog.module.css";
import { useState } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";

const Dialog = ({ trigger, content }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeDialog();
    }
  };

  const dialogContent = (
    <div
      className={`${styles["dialog-overlay"]} no-scroll`}
      onClick={handleOverlayClick}
    >
      <div className={styles["dialog-content"]}>
        <button onClick={closeDialog} className={`${styles["close-button"]}`}>
          <Image src="/img/icons/close.svg" alt="Close" fill sizes="26px" />
        </button>
        {content}
      </div>
    </div>
  );

  return (
    <>
      <div onClick={openDialog}>{trigger}</div>
      {isDialogOpen && ReactDOM.createPortal(dialogContent, document.body)}
    </>
  );
};

export default Dialog;
