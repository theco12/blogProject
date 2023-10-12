import { useState } from "react";
import { Link } from "react-router-dom";

interface PostListProps {
  hasNavigation?: boolean;
}

type TabType = "all" | "my";

export default function PostList({ hasNavigation = true }: PostListProps) {
  const [activeTab, setActiveTab] = useState<TabType>("all");
  return (
    <>
      {hasNavigation && (
        <div className="post__navigation">
          <div
            role="presentation"
            onClick={() => setActiveTab("all")}
            className={activeTab === "all" ? "post__navigation--active" : ""}>
            전체
          </div>
          <div
            role="presentation"
            onClick={() => setActiveTab("my")}
            className={activeTab === "my" ? "post__navigation--active" : ""}>
            나의 글
          </div>
        </div>
      )}
      <div className="post__list">
        {[...Array(10)].map((e, index) => (
          <div key={index} className="post__box">
            <Link to={`/posts/${index}`}>
              <div className="post__profile-box">
                <div className="post__profile"></div>
                <div className="post__username">사용자 이름</div>
                <div className="post__date"></div>
              </div>
              <div className="post__title">게시글 {index}</div>
              <div className="post__text">게시글 내용</div>
              <div className="post__utils-box">
                <div className="post__delete">삭제</div>
                <div className="post__edit">
                  <Link to="/posts/edit/:id">수정</Link>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
