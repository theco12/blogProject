import { getAuth, signOut } from "firebase/auth";
import { app } from "firebaseApp";
import { useContext } from "react";
import AuthContext from "context/AuthContext";
import { toast } from "react-toastify";

const onSignOut = async () => {
  try {
    const auth = getAuth(app);
    await signOut(auth);
    toast.success("로그아웃 되었습니다.");
  } catch (error: any) {
    toast.error(error?.code);
  }
};

export default function Profile() {
  const { user } = useContext(AuthContext);

  console.log(user);

  return (
    <div className="profile__box">
      <div className="flex__box_lg">
        <div className="profile__image" />
        <div>
          <div className="profile__email">{user?.email}</div>
          <div className="profile__name">{user?.displayName || "사용자"}</div>
        </div>
      </div>
      <div className="profile__logout" role="presentation" onClick={onSignOut}>
        로그아웃
      </div>
    </div>
  );
}
