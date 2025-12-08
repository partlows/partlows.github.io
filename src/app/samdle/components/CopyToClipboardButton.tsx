"use client";
import { useRef, useState } from "react";
import styles from "./CopyToClipboardButton.module.scss";

type CopyToClipboardButtonProps = {
  contentToCopy: string;
  buttonText: string;
};

export const CopyToClipboardButton: React.FC<CopyToClipboardButtonProps> = ({
  contentToCopy,
  buttonText,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [btnTxt, setBtnText] = useState(buttonRef?.current?.innerText ?? buttonText);
  return (
    <button
      ref={buttonRef}
      className={styles["button"]}
      onClick={() => {
        navigator.clipboard.writeText(contentToCopy);
        setBtnText("Copied to Clipboard!");
        setTimeout(() => {
            setBtnText(buttonText);
        }, 3000)
      }}
    >
      {btnTxt}
    </button>
  );
};
