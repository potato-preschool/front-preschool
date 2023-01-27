import React from "react";

function IncreaseButton(props) {
  const { onClick, label } = props;
  return <button onClick={onClick}>{label}</button>;
}

export default IncreaseButton;
