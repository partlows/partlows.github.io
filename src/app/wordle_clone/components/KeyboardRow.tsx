type KeyboardRowProps = {
  keyContent: string[];
};

export const KeyboardRow: React.FC<KeyboardRowProps> = ({ keyContent }) => {
  return (
    <div>
      {keyContent.map((key, i) => {
        return <button key={i}type="button">{key}</button>;
      })}
    </div>
  );
};
