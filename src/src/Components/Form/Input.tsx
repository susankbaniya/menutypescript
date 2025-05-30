import { useState } from "react";

function Input() {
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState("");

  const handleClick = (e) => {
    setValue(e.target.value);
  };

  const clickButton = () => {
    setSubmitted(value);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Type Any
      </h1>

      <div className="mb-4">
        <label
          htmlFor="nameInput"
          className="block font-medium text-gray-700 mb-1 text-xl"
        >
          INPUT
        </label>
        <input
          id="nameInput"
          type="text"
          placeholder="Type something"
          value={value}
          onChange={handleClick}
          className="w-full px-4 py-2 border text-xl "
        />
      </div>

      <button
        onClick={clickButton}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
      >
        Submit
      </button>
     
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">
            Input Value:
          </h2>
          <p className="text-xl text-blue-600 font-medium">{submitted}</p>
        </div>
      
    </div>
  );
}

export default Input;
