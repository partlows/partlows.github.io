import styles from "./KeyboardRow.module.scss";
import cn from "clsx";

type KeyboardRowProps = {
  disableKeys: boolean;
  keyContent: string[];
  handleKeyClick: (key: string) => void;
  letterStates: Record<string, string | undefined>;
};

export const KeyboardRow: React.FC<KeyboardRowProps> = ({
  keyContent,
  handleKeyClick,
  disableKeys,
  letterStates,
}) => {

  return (
    <div className={styles["keyboard-row"]}>
      {keyContent.map((key, i) => {
        const letterState = letterStates[key];
        
        return (
          <button
            className={cn(styles.key, {
              [styles[`key--${letterState}`]]: letterState,
            })}
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
