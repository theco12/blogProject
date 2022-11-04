import { Route } from "react-router-dom";
import "../css/header.css";

const Header = () => {
  return (
    <div>
      <div className="container">
        <div>
          <img className="logo" src="./img/logo.png" />
        </div>
        <ul className="menu">
          <li>모니모 소개</li>
          <li>공지사항</li>
          <li>고객센터</li>
          <li>공동인증서</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
