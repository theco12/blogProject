import { useEffect, useState, useContext } from "react";
import { collection, deleteDoc, doc, getDocs, orderBy, query, where } from "firebase/firestore";
import AuthContext from "context/AuthContext";
import { db } from "firebaseApp";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export interface CommentsInterface {
  content: string;
  uid: string;
  email: string;
  createdAt: string;
}

interface PostListProps {
  hasNavigation?: boolean;
  defaultTab?: TabType | CategoryTpye;
}

export interface PostProps {
  category: CategoryTpye;
  id?: string;
  email: string;
  title: string;
  summary: string;
  content: string;
  createdAt: string;
  updatedAt?: string;
  uid?: string;
  CategoryTpye?: CategoryTpye;
  comments?: CommentsInterface[];
}

type TabType = "all" | "my";
export type CategoryTpye = "Frontend" | "Backend" | "DevOps" | "Design";
export const CATEGORYS: CategoryTpye[] = ["Frontend", "Backend", "DevOps", "Design"];

export default function PostList({ hasNavigation = true, defaultTab = "all" }: PostListProps) {
  const [activeTab, setActiveTab] = useState<TabType | CategoryTpye>(defaultTab);
  const [posts, setPosts] = useState<PostProps[]>([]);
  const { user } = useContext(AuthContext);

  const getPosts = async () => {
    setPosts([]);

    const postsRef = collection(db, "posts");
    let postsQuery;

    if (activeTab === "my") {
      postsQuery = query(postsRef, orderBy("createdAt", "desc"), where("uid", "==", user?.uid));
    } else if (activeTab === "all") {
      postsQuery = query(postsRef, orderBy("createdAt", "desc"));
    } else {
      postsQuery = query(
        postsRef,
        where("category", "==", activeTab),
        orderBy("createdAt", "desc"),
      );
    }

    const data = await getDocs(postsQuery);
    data?.forEach((doc: any) => {
      const dataObj = {
        ...doc.data(),
        id: doc.id,
      };

      setPosts((prev) => [...prev, dataObj as PostProps]);
    });
  };

  useEffect(() => {
    getPosts();
  }, [activeTab]);

  const handleDelete = async (id: string) => {
    const confirm = window.confirm("정말로 삭제하시겠습니까?");
    if (confirm && id) {
      await deleteDoc(doc(db, "posts", id));
      toast.success("게시글이 삭제되었습니다.");
      getPosts();
    }
  };

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

          {CATEGORYS.map((category) => (
            <div
              role="presentation"
              onClick={() => setActiveTab(category)}
              className={activeTab === category ? "post__navigation--active" : ""}>
              {category}
            </div>
          ))}
        </div>
      )}
      <div className="post__list">
        {posts?.length > 0 ? (
          posts?.map((post, index) => (
            <div key={post?.id} className="post__box">
              <Link to={`/posts/${post?.id}`}>
                <div className="post__profile-box">
                  <div className="post__profile"></div>
                  <div className="post__username">{post?.email}</div>
                  <div className="post__date">{post?.createdAt}</div>
                </div>
                <div className="post__title">{post?.title}</div>
                <div className="post__text">{post?.summary}</div>
              </Link>
              {post?.email === user?.email && (
                <div className="post__utils-box">
                  <div
                    className="post__delete"
                    onClick={() => {
                      handleDelete(post?.id as string);
                    }}>
                    삭제
                  </div>
                  <div className="post__edit">
                    <Link to={`/posts/edit/${post?.id}`}>수정</Link>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="post__no-post">게시글이 없습니다.</div>
        )}
      </div>
    </>
  );
}
