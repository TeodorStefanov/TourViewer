import React, { FC, useContext } from "react";
import { DataContext } from "../../dataContext";
import styles from "./tourPage.module.css";
import { useNavigate } from "react-router-dom";
import { requestCredentials } from "../../utils/constans";
export const TourPage: FC = () => {
  const { tourId, key } = requestCredentials;
  const { data } = useContext(DataContext);
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <p className={styles.title}>{data!.name}</p>
      <div
        className={styles.title}
        dangerouslySetInnerHTML={{ __html: data!.description }}
      />
      <p className={styles.title}>
        <b>Floors in "Front-end developer evaluation task"</b>
      </p>
      {data?.structure.map((el, index) => {
        return (
          <p
            className={styles.floors}
            onClick={() => navigate(`/${tourId}/${el.id}?key=${key}`)}
            key={index}
          >
            {el.name}
          </p>
        );
      })}
    </div>
  );
};
