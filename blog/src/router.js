import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import LayOut from "./components/LayOut/LayOut.js";
import Page404 from "./pages/404.js";
import Join from "./pages/Join.js";
import Header from "./components/common/Header.js";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" elment={<LayOut />}>
    
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<Join />} />

          <Route path="/*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
