import { Link } from "react-router-dom";

interface PrecomputedLinkProps {
  boardSize: number;
  href: string;
}

const PrecomputedButton = (input: PrecomputedLinkProps) => {
  return (
    <Link to={input.href} key={input.boardSize}>
      <button className={`rounded p-1 w-full text-white bg-[#F96C51]`}>
        {input.boardSize}x{input.boardSize}
      </button>
    </Link>
  );
};

export default PrecomputedButton;
