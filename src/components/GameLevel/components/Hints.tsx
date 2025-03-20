import React from "react";

type HintsProps = {
  message: React.ReactNode;
};

const Hints: React.FC<HintsProps> = ({ message }) => {
  return <div>{message}</div>;
};

export default Hints;
