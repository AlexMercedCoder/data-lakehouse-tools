import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App.js";
import Main from "../pages/Main.js";
import ArcticSpark from "../pages/ArcticSpark.js";
import Guides from "../pages/Guides.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<Main />} />
        <Route path="arcticspark" element={<ArcticSpark />} />
        <Route path="guides" element={<Guides />} />
      </Route>
    </>
  )
);

export default router;
