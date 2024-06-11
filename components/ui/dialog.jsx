"use client";

import { useState, useRef } from "react";
import styles from "./dialog.module.css";
import Image from "next/image";

const Dialog = ({ trigger, content }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dialogRef = useRef(null);

  function handleTriggerClick() {
    if (dialogRef.current) {
      dialogRef.current.showModal();
      setIsDialogOpen(true);
    }
  }

  function handleCloseClick() {
    if (dialogRef.current) {
      dialogRef.current.close();
      setIsDialogOpen(false);
    }
  }

  return (
    <>
      <div onClick={handleTriggerClick}>{trigger}</div>
      <dialog
        ref={dialogRef}
        onClick={(ev) => {
          const target = ev.target;
          if (target.nodeName === "DIALOG") {
            target.close();
          }
        }}
        className={`${styles["dialog"]}`}
      >
        <div>
          <button
            onClick={() => dialogRef?.current?.close()}
            className={`${styles["close-button"]}`}
          >
            <Image src="/img/icons/close.svg" alt="Close" fill sizes="26px" />
          </button>
          {content}
        </div>
      </dialog>
    </>
  );
};

export default Dialog;
