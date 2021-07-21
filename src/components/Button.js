import React from "react";

const Buttonjsx = ({ handleAdd, value }) => {
  return (
    <button onClick={() => handleAdd(value)}>
      {value < 0 ? value : `+ ${value}`}
    </button>
  );
};

export default Buttonjsx;
