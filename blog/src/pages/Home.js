import Header from "./Header.js";

const dummyList = [1, 2, 3, 4, 5, 6, 7, 8];

const Home = () => {
  return (
    <div>
      <Header />

      {dummyList.map((i) => {
        console.log("Partner" + i);
      })}
    </div>
  );
};

export default Home;
