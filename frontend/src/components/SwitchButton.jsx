import PropTypes from "prop-types";
import React from "react";

function SwitchButton({ setShow }) {
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

SwitchButton.propTypes = {
  setShow: PropTypes.func.isRequired,
};

export default SwitchButton;
