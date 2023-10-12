import { Link } from "react-router-dom";

export default function PostDetail() {
  return (
    <>
      <div className="post__detail">
        <div className="post__box">
          <div className="post__title">Contrary to popular beliefes</div>
          <div className="post__profile-box">
            <div className="post__profile"></div>
            <div className="post__username">사용자 이름</div>
            <div className="post__date"></div>
          </div>
          <div className="post__utils-box">
            <div className="post__delete">삭제</div>
            <div className="post__edit">
              <Link to="/posts/edit/:id">수정</Link>
            </div>
          </div>
          <div className="post__title">게시글 </div>
          <div className="post__text">게시글 내용</div>
        </div>
      </div>
    </>
  );
}
