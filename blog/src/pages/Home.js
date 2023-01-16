import { useState } from "react";

const Home = () => {
  const [isDark, setIsdark] = useState(false);
  const DarkMode = () => {
    setIsdark(!isDark);
  };

  return (
    <div>
      안녕하세요
      <div>
        <button onClick={DarkMode}>
          {isDark ? <div>다크모드</div> : <div>라이트모드</div>}
        </button>
      </div>
    </div>
  );
};

export default Home;
