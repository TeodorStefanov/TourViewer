import React, { FC } from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { requestCredentials } from "../../utils/constans";
export const HomePage: FC = () => {
  const { tourId, key } = requestCredentials;
  return (
    <div className={styles.container}>
      <Link to={`/${tourId}?key=${key}`} className={styles.title}>
        Open Viewer
      </Link>
    </div>
  );
};
