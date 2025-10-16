import { LoginHandler } from "@/app/components/LoginHandler";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.container}>
        <LoginHandler />
      </nav>
    </div>
  );
};
