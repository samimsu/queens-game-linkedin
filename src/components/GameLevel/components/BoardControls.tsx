import { useTranslation } from "react-i18next";
import Button from "../../Button";

type BoardControlsProps = {
  onUndoClick: () => void
  onHintClick: () => void
  undoButtonDisabled: boolean
  hintButtonDisabled: boolean
}

const BoardControls: React.FC<BoardControlsProps> = ({ onUndoClick, onHintClick, undoButtonDisabled, hintButtonDisabled }) => {
  const { t } = useTranslation()

  return (
    <div className="flex">
      <Button
        className="border border-slate-500 rounded-full p-2 mr-2 w-full mt-[16px]"
        onClick={onUndoClick}
        disabled={undoButtonDisabled}
      >
        {t("UNDO")}
      </Button>
      <Button
        className="border border-slate-500 rounded-full p-2 mr-2 w-full mt-[16px]"
        onClick={onHintClick}
        disabled={hintButtonDisabled}
      >
        {t("HINT")}
      </Button>
    </div>
  );
};

export default BoardControls;
