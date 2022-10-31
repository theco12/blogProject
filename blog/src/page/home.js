import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate("/aboutpage");
        }}
      >
        about
      </button>
    </div>
  );
};

export default Home;
