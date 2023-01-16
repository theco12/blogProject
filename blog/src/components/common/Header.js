import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul>
        <Link to="/">
          <a>
            <li>home</li>
          </a>
        </Link>
        <li>회원가입</li>
        <li>로그인</li>
      </ul>
    </div>
  );
};

export default Header;
