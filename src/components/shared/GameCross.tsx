const GameCross = () => {
  return (
    <span className="cell-input cell-input--cross">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.875 4.25L8 7.125L5.125 4.25L4.25 5.125L7.125 8L4.25 10.875L5.125 11.75L8 8.875L10.875 11.75L11.75 10.875L8.875 8L11.75 5.125L10.875 4.25Z"
          fill="black"
          fillOpacity="0.75"
        ></path>
      </svg>
    </span>
  );
};

export default GameCross;