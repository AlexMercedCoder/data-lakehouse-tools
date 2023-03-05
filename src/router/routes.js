import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App.js";
import Main from "../pages/Main.js";
import ArcticSpark from "../pages/ArcticSpark.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<Main />} />
        <Route path="arcticspark" element={<ArcticSpark />} />
      </Route>
    </>
  )
);

export default router;
