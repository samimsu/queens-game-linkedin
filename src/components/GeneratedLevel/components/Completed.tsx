import { Link } from "react-router-dom";
import formatDuration from "@/utils/formatDuration.ts";

interface CompletedProps {
  boardSize: number;
  href: string;
  timeInSeconds: number;
}

const Completed = (input: CompletedProps) => {
  return (
    <Link to={input.href} key={input.boardSize}>
      <button className={`rounded p-1 w-full text-white bg-[#F96C51]`}>
        {input.boardSize}x{input.boardSize} -{" "}
        {formatDuration(input.timeInSeconds)}
      </button>
    </Link>
  );
};

export default Completed;
