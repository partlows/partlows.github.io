type KeyboardRowProps = {
  keyContent: string[];
};

export const KeyboardRow: React.FC<KeyboardRowProps> = ({ keyContent }) => {
  return (
    <div>
      {keyContent.map((key) => {
        return <button type="button">{key}</button>;
      })}
    </div>
  );
};
