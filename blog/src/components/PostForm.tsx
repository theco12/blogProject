import { useState, useContext } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "firebaseApp";
import AuthContext from "context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function PostForm() {
  const [title, setTitle] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      //firestore에 데이터를 저장하는 로직
      await addDoc(collection(db, "posts"), {
        title: title,
        summary: summary,
        content: content,
        email: user?.email,
        createdAt: new Date()?.toLocaleDateString(),
      });
      navigate("/");
      toast.success("게시글이 등록되었습니다.");
    } catch (error: any) {
      console.log(error);
      toast.error(error?.code);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
  };
  return (
    <>
      <form onSubmit={onSubmit} className="form">
        <div className="form__block">
          <label htmlFor="title">제목</label>
          <input type="text" id="title" name="title" required onChange={onChange} value={title} />
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
          <input type="submit" value="제출" className="form__btn--submit" />
        </div>
      </form>
    </>
  );
}
