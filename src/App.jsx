import HomeTemplate from "./pages/HomeTemplate";
import HomePage from "./pages/HomeTemplate/HomePage";
import AboutPage from "./pages/HomeTemplate/AboutPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { renderRoutes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      {/* <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route path="" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes> */}
      <Routes>{renderRoutes()}</Routes>
    </BrowserRouter>
  );
}

export default App;
