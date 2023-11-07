import { useState, useContext, useEffect } from "react";
import { collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "firebaseApp";
import AuthContext from "context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { CATEGORYS, CategoryTpye, PostProps } from "./PostList";

export default function PostForm() {
  const [title, setTitle] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [posts, setPosts] = useState<PostProps | null>(null);
  const [category, setCategory] = useState<CategoryTpye>("BookReview");

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();

  const getPost = async (id: string) => {
    if (id) {
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);
      setPosts({ id: docSnap.id, ...(docSnap?.data() as PostProps) });
    }
  };

  useEffect(() => {
    if (params?.id) {
      getPost(params?.id);
    }
  }, [params?.id]);

  useEffect(() => {
    if (posts) {
      setTitle(posts?.title);
      setSummary(posts?.summary);
      setContent(posts?.content);
      setCategory(posts?.category as CategoryTpye);
    }
  }, [posts]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (posts && posts?.id) {
        const postRef = doc(db, "posts", posts?.id);
        await updateDoc(postRef, {
          title: title,
          summary: summary,
          content: content,
          updatedAt: new Date()?.toLocaleDateString("ko", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }),
          category: category,
        });
        toast.success("게시글이 수정되었습니다.");
        navigate(`/posts/${posts.id}`);
      } else {
        //firestore에 데이터를 저장하는 로직
        await addDoc(collection(db, "posts"), {
          title: title,
          summary: summary,
          content: content,
          email: user?.email,
          createdAt: new Date()?.toLocaleDateString("ko", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }),
          uid: user?.uid,
          category: category,
        });
        navigate("/");
        toast.success("게시글이 등록되었습니다.");
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.code);
    }
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "title") {
      setTitle(value);
    }
    if (name === "summary") {
      setSummary(value);
    }
    if (name === "content") {
      setContent(value);
    }
    if (name === "category") {
      setCategory(value as CategoryTpye);
    }
  };
  return (
    <>
      <form onSubmit={onSubmit} className="form">
        <div className="form__block">
          <label htmlFor="title">제목</label>
          <input type="text" id="title" name="title" required onChange={onChange} value={title} />
        </div>

        <div className="form__block">
          <label htmlFor="title">카테고리</label>
          <select name="category" id="category" onChange={onChange} defaultValue={category}>
            <option value="">카테고리를 선택해주세요</option>
            {CATEGORYS.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
            ㄴ
          </select>
        </div>

        <div className="form__block">
          <label htmlFor="title">요약</label>
          <input
            type="text"
            id="summary"
            name="summary"
            required
            onChange={onChange}
            value={summary}
          />
        </div>
        <div className="form__block">
          <label htmlFor="title">내용</label>
          <textarea name="content" id="content" required onChange={onChange} value={content} />
        </div>

        <div className="form__block">
          <input type="submit" value={posts ? "수정" : "제출"} className="form__btn--submit" />
        </div>
      </form>
    </>
  );
}
