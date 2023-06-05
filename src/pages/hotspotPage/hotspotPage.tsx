import { useEffect, useState, useRef, FC } from "react";
import { urlServer } from "../../utils/url";
import { requestCredentials } from "../../utils/constans";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Hotspot } from "../../types/hotspot";
import { LoadingLoader } from "../../components/loading";
import styles from "./hotspotPage.module.css";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import { Viewer } from "@photo-sphere-viewer/core";
import "@photo-sphere-viewer/core/index.css";
export const HotspotPage: FC = () => {
  const [hotspotDataGet, setHotspotDataGet] = useState<null | [] | Hotspot[]>(
    null
  );
  const [hotspotOne, setHotspotOne] = useState<string>("");
  const { tourId, key } = requestCredentials;
  const { floorId, hotspotId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const viewerRef = useRef<Viewer>(null);
  const { floorName, hotspotName } = location.state;
  useEffect(() => {
    const getHotspotData = async () => {
      try {
        const promise = await fetch(
          `${urlServer}/hotspots/${hotspotId}?key=${key}`
        );
        if (promise.status === 200) {
          const response = await promise.json();
          setHotspotDataGet(() => response.data);
          if (response.data.length > 0) {
            setHotspotOne(() => response.data[0].assets.hd);
          }
        } else {
          navigate("/error");
        }
      } catch (err) {
        navigate("/error");
      }
    };
    getHotspotData();
  }, [hotspotId, key, navigate]);
  const handleClickHotspot = (imageUrl: string) => {
    setHotspotOne(imageUrl);
    if (viewerRef.current) {
      viewerRef.current.setPanorama(imageUrl);
    }
  };
  if (hotspotDataGet === null) {
    return <LoadingLoader />;
  }
  return (
    <div className={styles.container}>
      <p>
        <span
          className={styles.title}
          onClick={() => navigate(`/${tourId}?/key=${key}`)}
        >
          Floors in "Front-end developer evaluation task{" "}
        </span>
        <span
          style={{ color: "white" }}
          onClick={() => navigate(`/${tourId}/${floorId}`)}
        >
          /
        </span>
        <span
          className={styles.title}
          onClick={() => navigate(`/${tourId}/${floorId}`)}
        >
          {" "}
          {floorName}
        </span>
        <span style={{ color: "white" }}> / </span>
        <span style={{ color: "white" }}>{hotspotName}</span>
      </p>
      <h1>Photos in "{hotspotName}"</h1>
      {hotspotDataGet.length === 0 ? (
        <div>There are no photos in this hotspot...</div>
      ) : (
        <div className={styles.hotspotsTop}>
          <div className={styles.hotspotsMenu}>
            {hotspotDataGet.map((el, index) => {
              return (
                <img
                  src={el.assets.thumbnail}
                  alt=""
                  key={index}
                  onClick={() => handleClickHotspot(el.assets.hd)}
                />
              );
            })}
          </div>
          <ReactPhotoSphereViewer
            src={hotspotOne}
            ref={viewerRef}
            width="1000px"
            height="700px"
            container=""
            keyboard={true}
          />
        </div>
      )}
    </div>
  );
};
