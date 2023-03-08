import React from "react";
import { myContext } from "../context/MyContext";

function SwitchButton() {
  const { setShow } = myContext();

  const handleClick = () => {
    setShow(null);
  };

  const handleClick2 = () => {
    setShow(true);
  };

  return (
    <div>
      <button onClick={handleClick} type="button">
        X
      </button>
      <button onClick={handleClick2} type="button">
        Y
      </button>
    </div>
  );
}

export default SwitchButton;
