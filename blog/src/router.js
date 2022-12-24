import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Detail from "./pages/Detail.js";
import Header from "./components/common/Header.js";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
