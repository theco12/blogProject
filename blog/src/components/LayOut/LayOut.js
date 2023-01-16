import { Outlet } from "react-router-dom";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";

const LayOut = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default LayOut;
