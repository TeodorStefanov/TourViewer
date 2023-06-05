import { useNavigate } from "react-router-dom";
import { FloorHotSpots } from "../../types/floorHotspots";
import styles from "./floorHotspot.module.css";
import { requestCredentials } from "../../utils/constans";
export const FloorHotspot = ({
  x,
  y,
  floorId,
  id,
  floorName,
  hotspotName,
}: FloorHotSpots) => {
  const navigate = useNavigate();
  const { tourId, key } = requestCredentials;

  return (
    <span
      style={{
        top: `${y + "%"}`,
        left: `${x + "%"}`,
      }}
      className={styles.dot}
      onClick={() =>
        navigate(`/${tourId}/${floorId}/${id}?key=${key}`, {
          state: { floorName, hotspotName },
        })
      }
    ></span>
  );
};
