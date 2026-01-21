import { Link } from "react-router-dom";
import { getFormattedSizeForLevel } from "@/utils/generated/levelEncoder.ts";
import { preGeneratedSamples } from "@/utils/generated/preGenerated.ts";

interface GenerateButtonProps {
  boardSize: number;
  onClick?: () => void;
  title?: string;
  disabled?: boolean;
}

const GenerateButton = (input: GenerateButtonProps) => {
  return (
    <Link
      onClick={input.onClick}
      to={`/random-level?size=${input.boardSize}`}
      key={input.boardSize}
      className="relative"
      title={input.boardSize.toString()}
    >
      <button className={"relative rounded p-2 w-full text-white bg-[#F96C51]"}>
        {getFormattedSizeForLevel(preGeneratedSamples[input.boardSize])}
      </button>
    </Link>
  );
};

export default GenerateButton;
