import { Suspense } from "react";
import styles from "./Header.module.scss";
import { UserButton } from "@neondatabase/auth/react";

export const Header: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* <Suspense fallback={<></>}>
          <UserButton size="icon" />
        </Suspense> */}
      </div>
    </div>
  );
};
