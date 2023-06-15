import { useState } from "react";

const Detail = () => {
  const [inputs, setInputs] = useState([
    { value: "", checked: false, Level: 10, LevelName: "내담자" },
    { value: "", checked: false, Level: 10, LevelName: "내담자" },
    { value: "", checked: false, Level: 20, LevelName: "상담자" },
    { value: "", checked: false, Level: 20, LevelName: "상담자" },
  ]);

  const handleInputChange = (index, event) => {
    const newInputs = [...inputs];
    newInputs[index].value = event.target.value;
    setInputs(newInputs);
  };

  const handleCheckboxChange = (index) => {
    const newInputs = [...inputs];
    newInputs[index].checked = !newInputs[index].checked;
    setInputs(newInputs);
  };

  const handleSubmit = () => {
    // inputs 배열을 이용하여 필요한 작업 수행
    console.log(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((input, index) => (
        <div key={index}>
          <span>{input.LevelName}</span>
          <input
            type="text"
            value={input.value}
            onChange={(event) => handleInputChange(index, event)}
          />

          <input
            type="checkbox"
            checked={input.checked}
            onChange={() => handleCheckboxChange(index)}
          />
        </div>
      ))}
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default Detail;
