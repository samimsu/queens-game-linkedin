import { Link } from "react-router-dom";
import Queen from "../../../components/Queen";
import {
  getRandomLevelCompletionTimeWithLabel,
  isRandomLevelCompleted,
} from "@/utils/localStorage.ts";
import NewBadge from "@/components/NewBadge";
import {
  getFormattedSizeForLevel,
  getHashForLevelId,
} from "@/utils/generated/levelEncoder.ts";
import formatDuration from "@/utils/formatDuration.ts";

const RandomLevelButton = ({
  level,
  isNew,
  title,
}: {
  level: string;
  isNew: boolean;
  title?: string | undefined;
}) => {
  const completed = isRandomLevelCompleted(level);
  const levelSize = `${getFormattedSizeForLevel(level)}`;
  return (
    <Link
      to={`/random-level/${level}`}
      key={getHashForLevelId(level)}
      className="relative"
      title={title ?? levelSize}
    >
      {isNew && !completed && (
        <NewBadge className="absolute -top-2 -right-3 z-10" />
      )}
      <button className={"relative rounded p-2 w-full text-white bg-[#F96C51]"}>
        {completed ? getRandomLevelCompletionTimeWithLabel(level) : levelSize}
        {completed && (
          <span className="absolute top-0 right-0 text-2xl font-bold p-0.5">
            <Queen size="10" className="fill-yellow-400" />
          </span>
        )}
      </button>
    </Link>
  );
};

export default RandomLevelButton;
