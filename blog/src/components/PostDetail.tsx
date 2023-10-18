import { Link, useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import AuthContext from "context/AuthContext";
import { PostProps } from "./PostList";
import { db } from "firebaseApp";
import { doc, getDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import Loader from "./Loader";

export default function PostDetail() {
  const [posts, setPosts] = useState<PostProps | null>(null);
  const params = useParams<{ id: string }>();

  const getPost = async (id: string) => {
    if (id) {
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);
      setPosts({ id: docSnap.id, ...(docSnap?.data() as PostProps) });
    }
  };

  const handleDelete = async () => {
    console.log("삭제되었습니다.");
  };

  useEffect(() => {
    if (params?.id) {
      getPost(params?.id);
    }
  }, [params?.id]);

  return (
    <>
      {posts ? (
        <div className="post__detail">
          <div className="post__box">
            <div className="post__title">{posts?.title}</div>
            <div className="post__profile-box">
              <div className="post__profile"></div>
              <div className="post__username">{posts?.email}</div>
              <div className="post__date"></div>
            </div>
            <div className="post__utils-box">
              <div className="post__delete" role="presentaion" onClick={handleDelete}>
                삭제
              </div>
              <div className="post__edit">
                <Link to={`/posts/edit/${params?.id}`}>수정</Link>
              </div>
            </div>
            <div className="post__text post__text--pre-wrap">{posts?.content}</div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
