import styles from "./KeyboardRow.module.scss";

type KeyboardRowProps = {
  disableKeys: boolean;
  keyContent: string[];
  handleKeyClick: (key: string) => void;
};

export const KeyboardRow: React.FC<KeyboardRowProps> = ({
  keyContent,
  handleKeyClick,
  disableKeys,
}) => {
  return (
    <div className={styles["keyboard-row"]}>
      {keyContent.map((key, i) => {
        return (
          <button
            className={styles.key}
            disabled={disableKeys}
            key={i}
            onClick={() => handleKeyClick(key)}
            type="button"
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};
