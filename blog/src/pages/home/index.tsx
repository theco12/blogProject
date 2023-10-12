import { Link } from "react-router-dom";
import PostList from "components/PostList";
import Carousel from "components/Carousel";

export default function Home() {
  return (
    <>
      <Carousel />
      <PostList />
    </>
  );
}
