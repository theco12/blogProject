import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Header from "./components/Header";
import UseMemo1 from "./pages/useMemo1";
import UseCallback1 from "./pages/Todoapp";
import Map1 from "./pages/Map1";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/useMemo1" element={<UseMemo1 />} />
        <Route path="/todoapp" element={<UseCallback1 />} />
        <Route path="/map" element={<Map1 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
