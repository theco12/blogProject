import { useContext, useState } from "react";
import { CommentsInterface, PostProps } from "./PostList";
import { updateDoc, doc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "firebaseApp";
import AuthContext from "context/AuthContext";
import { toast } from "react-toastify";

interface CommentProps {
  post: PostProps;
  getPost: (id: string) => void;
}

export default function Comments({ post, getPost }: CommentProps) {
  const [comment, setComment] = useState("");
  const { user } = useContext(AuthContext);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "comment") setComment(value);
  };

  const handleDeleteComment = async (data: CommentsInterface) => {
    const confirm = window.confirm("정말로 삭제하시겠습니까?");
    if (confirm && post?.id) {
      const postRef = doc(db, "posts", post?.id);
      await updateDoc(postRef, {
        comments: arrayRemove(data),
      });
      toast.success("댓글이 삭제되었습니다.");
      await getPost(post?.id);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (post && post?.id) {
        const postRef = doc(db, "posts", post?.id);
        if (user?.uid) {
          const commentObj = {
            content: comment,
            uid: user?.uid,
            email: user?.email,
            createdAt: new Date()?.toLocaleDateString("ko", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }),
          };
          await updateDoc(postRef, {
            comments: arrayUnion(commentObj),
            updateDated: new Date()?.toLocaleDateString("ko", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }),
          });
          await getPost(post?.id);
        }
      }
      toast.success("댓글이 등록되었습니다.");
      setComment("");
    } catch (error: any) {
      console.log(error);
      toast.error(error?.code);
    }
  };

  return (
    <div className="comments">
      <form className="comments__form" onSubmit={onSubmit}>
        <div className="form__block">
          <label htmlFor="comment">댓글입력</label>
          <textarea
            name="comment"
            id="comment"
            required
            value={comment}
            onChange={onChange}></textarea>
        </div>
        <div className="form__block form__block-reverse">
          <input type="submit" value="입력" className="form__btn-submit " />
        </div>
      </form>
      <div className="comments__list">
        {post?.comments
          ?.slice(0)
          ?.reverse()
          .map((comment) => (
            <div key={comment?.createdAt} className="commnet__box">
              <div className="comment__profile-box">
                <div className="comment__email">{comment.email}</div>
                <div className="comment__date">{comment.createdAt}</div>
                {comment.uid === user?.uid && (
                  <div className="comment__delete" onClick={() => handleDeleteComment(comment)}>
                    삭제
                  </div>
                )}
              </div>
              <div className="comment__text">{comment.content}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
