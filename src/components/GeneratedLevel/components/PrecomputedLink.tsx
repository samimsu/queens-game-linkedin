import { Link } from "react-router-dom";
import formatDuration from "@/utils/formatDuration.ts";

interface PrecomputedLinkProps {
  boardSize: number;
  href: string;
  previousBest: number;
}

const PrecomputedButton = (input: PrecomputedLinkProps) => {
  return (
    <Link to={input.href} key={input.boardSize}>
      <button className={`rounded p-1 w-full text-white bg-[#F96C51]`}>
        {input.boardSize}x{input.boardSize}
        {input.previousBest > 0
          ? ` - PB: ${formatDuration(input.previousBest)}`
          : ""}
      </button>
    </Link>
  );
};

export default PrecomputedButton;
