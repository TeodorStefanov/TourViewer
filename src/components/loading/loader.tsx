import { FC } from "react";
import styles from "./index.module.css";
export const LoadingLoader: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
    </div>
  );
};
