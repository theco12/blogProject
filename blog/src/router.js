import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Header from "./components/Header";
import UseMemo1 from "./pages/userMemo1";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/usememo1" element={<UseMemo1 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
