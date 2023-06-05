import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/homePage";
import ContextProvider from "./dataContext";
import { ErrorPage } from "./pages/errorPage";
import { TourPage } from "./pages/tourPage";
import { FloorPage } from "./pages/floorPage";
import { HotspotPage } from "./pages/hotspotPage";
const Navigation = () => {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:tourId" element={<TourPage />} />
          <Route path="/:tourId/:floorId" element={<FloorPage />} />
          <Route
            path="/:tourId/:floorId/:hotspotId"
            element={<HotspotPage />}
          />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
};
export default Navigation;
