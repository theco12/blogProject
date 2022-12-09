import Hello from "./Hello.js";

const Safari = () => {
  return (
    <div>
      사파리입니다.
      <Hello age={10} />
      <Hello age={20} />
      <Hello age={30} />
    </div>
  );
};

export default Safari;
