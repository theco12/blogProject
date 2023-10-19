import { Link } from "react-router-dom";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Footer() {
  const context = useContext(ThemeContext);
  console.log(context);
  return (
    <>
      <footer>
        <Link to="/posts/new">글쓰기</Link>
        <Link to="/posts">게시글</Link>
        <Link to="/profile">프로필</Link>
        {context.theme === "light" ? (
          <BsSunFill onClick={context.toggleTheme} className="footer__theme-btn" />
        ) : (
          <BsMoonFill onClick={context.toggleTheme} className="footer__theme-btn" />
        )}
      </footer>
    </>
  );
}
