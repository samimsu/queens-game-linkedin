import {Link} from "react-router-dom";

interface GenerateButtonProps {
  boardSize: number;
  onClick?: () => void;
  title?: string;
  disabled?: boolean;
}

const GenerateButton = (input: GenerateButtonProps) => {
  return (
      <Link to={`/random-level?size=${input.boardSize}`} key={input.boardSize} onClick={input.onClick} title={input.title}>
          <button
              className={`rounded p-1 w-full text-white bg-[#F96C51] ${
                  input.disabled ? "opacity-75" : ""
              }`}
          >
              {input.boardSize}x{input.boardSize}
          </button>
      </Link>
  );
};

export default GenerateButton;
