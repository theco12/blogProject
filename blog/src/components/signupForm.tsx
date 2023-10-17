import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { app } from "firebaseApp";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

export default function SignupForm() {
  const [error, setError] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const auth = getAuth(app);
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("회원가입이 완료되었습니다.");
      navigate("/");
    } catch (error: any) {
      console.log(error);
      toast.error(error?.code);
    }
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
      const validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]{2,}$/i;
      if (!value?.match(validRegex)) {
        setError("invalid email");
      } else {
        setError("");
      }
    } else if (name === "password") {
      setPassword(value);
      if (value?.length < 8) {
        setError("비밀번호는 8자리 이상이어야 합니다.");
      } else if (passwordConfirm?.length > 0 && value !== passwordConfirm) {
        setError("비밀번호와 비밀번호 확인값이 일치하지 않습니다. 다시 확인해주세요.");
      } else {
        setError("");
      }
    } else {
      setPasswordConfirm(value);
      if (value?.length < 8) {
        setError("비밀번호가 일치하지 않습니다.");
      } else if (value !== password) {
        setError("비밀번호와 비밀번호 확인값이 일치하지 않습니다. 다시 확인해주세요.");
      } else {
        setError("");
      }
    }
  };
  return (
    <>
      <form onSubmit={onSubmit} className="form form--lg">
        <h1 className="form__title">회원가입</h1>
        <div className="form__block">
          <label htmlFor="email">이메일</label>
          <input type="email" id="email" name="email" required onChange={onChange} />
        </div>

        <div className="form__block">
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" name="password" required onChange={onChange} />
        </div>

        <div className="form__block">
          <label htmlFor="password_confirm">비밀번호확인</label>
          <input
            type="password"
            id="password_confirm"
            name="password_confirm"
            required
            onChange={onChange}
          />
        </div>

        {error && error?.length > 0 && (
          <div className="form__block">
            <div className="form__error">{error}</div>
          </div>
        )}

        <div className="form__block">
          계정이 있으신가요?
          <Link to="/login" className="form__link">
            로그인 하기
          </Link>
        </div>

        <div className="form__block">
          <input
            type="submit"
            value="회원가입"
            className="form__btn--submit"
            disabled={error?.length > 0}
          />
        </div>
      </form>
    </>
  );
}
