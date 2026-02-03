import styles from "./Header.module.scss";
import { UserButton } from "@neondatabase/auth/react";


export const Header: React.FC = () => {
  return <div className={styles.wrapper}>
    <div className={styles.container}>
      <UserButton size="icon"/>
    </div>
  </div>;
};
