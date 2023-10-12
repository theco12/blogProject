import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="profile__box">
      <div className="flex__box_lg">
        <div className="profile__image" />
        <div>
          <div className="profile__email">ejzhrla@naver.com</div>
          <div className="profile__name">김덕호</div>
        </div>
      </div>
      <Link to="/" className="profile__logout">
        로그아웃
      </Link>
    </div>
  );
}
