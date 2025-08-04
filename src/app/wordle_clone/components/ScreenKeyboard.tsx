import { KeyboardRow } from "./KeyboardRow";

export const ScreenKeyboard = () => {
  const KEYBOARD_LAYOUT = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["{enter}", "Z", "X", "C", "V", "B", "N", "M", "{bksp}"],
  ];

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      {KEYBOARD_LAYOUT.map((row) => {
        return <KeyboardRow keyContent={row} />;
      })}
    </div>
  );
};
