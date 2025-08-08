import styles from "./KeyboardRow.module.scss";
import cn from "clsx";

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
            className={cn(styles.key)}
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
