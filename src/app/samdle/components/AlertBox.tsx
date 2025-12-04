"use client";

import React, { useEffect, useRef } from "react";
import styles from "./AlertBox.module.scss";
import { useSamdleContext } from "./SamdleContext";

export const AlertBox: React.FC = () => {
  const { alertMessage, setAlertMessage, setIsGameOverModalOpen, isGameOver } =
    useSamdleContext!();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (alertMessage) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setAlertMessage("");
        if (isGameOver) setIsGameOverModalOpen(true);
      }, 3000);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [alertMessage, setAlertMessage]);

  if (!alertMessage) {
    return null;
  }

  return (
    <div role="alert" aria-live="polite" className={styles.alertbox}>
      {alertMessage}
    </div>
  );
};
