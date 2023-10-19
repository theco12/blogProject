import PostList from "../../components/PostList";
import Profile from "../../components/profile";

export default function ProfilePage() {
  return (
    <>
      <Profile />
      <PostList hasNavigation={false} defaultTab="my" />
    </>
  );
}
