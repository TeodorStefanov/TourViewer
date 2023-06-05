import { FC, useContext } from "react";
import styles from "./floorPage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../../dataContext";
import { Hotspot, Structure } from "../../types/tour";
import { requestCredentials } from "../../utils/constans";
import { FloorHotspot } from "../../components/floorHotspot";
export const FloorPage: FC = () => {
  const { floorId } = useParams();
  const { data } = useContext(DataContext);
  const { tourId, key } = requestCredentials;
  const navigate = useNavigate();
  const floor: Structure | undefined = data?.structure.find(
    (el: Structure) => el.id === floorId!
  );

  return (
    <div className={styles.container}>
      <p>
        <span
          className={styles.title}
          onClick={() => navigate(`/${tourId}?/key=${key}`)}
        >
          Floors in "Front-end developer evaluation task
        </span>{" "}
        /<span className={styles.floor}> {floor?.name}</span>
      </p>
      <h1 className={styles.hotspotsTitle}>"Hotspots in {floor?.name}"</h1>
      {floor?.hotspots.map((el: Hotspot, index: number) => {
        return (
          <p
            className={styles.hotspot}
            key={index}
            onClick={() =>
              navigate(`/${tourId}/${floorId}/${el.id}?key=${key}`, {
                state: { floorName: floor.name, hotspotName: el.name },
              })
            }
          >
            {el.name}
          </p>
        );
      })}
      <p>{floor?.name} - floor plan</p>
      <div style={{ background: floor?.floor_plan }} className={styles.plan}>
        {floor?.hotspots.map((el: Hotspot, index: number) => {
          return (
            <FloorHotspot
              y={el.position.y}
              x={el.position.x}
              floorId={floorId!}
              id={el.id}
              key={index}
              floorName={floor.name}
              hotspotName={el.name}
            />
          );
        })}

        <img src={floor?.floor_plan} alt="" className={styles.picture}></img>
      </div>
    </div>
  );
};
