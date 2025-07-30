import styles from "./LetterSpace.module.scss";

export const LetterSpace: React.FC = () => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        maxLength={1}
        className={styles.letter}
        pattern="[A-Z]"
        onInput={(e) => {
          const target = e.target as HTMLInputElement;
          const value = target.value;
          if (!/^[A-Za-z]$/.test(value)) {
            target.value = value.replace(/[^A-Z]/g, "");
          }
        }}
      />
    </div>
  );
};
