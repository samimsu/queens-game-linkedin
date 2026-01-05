// @ts-ignore
import AvailableLevelsFilter from "./AvailableLevelsFilter";
import CompletedLevelsSwitch from "./CompletedLevelsSwitch";

type LevelSelectionFiltersProps = {
  availableLevelsChecked: boolean;
  completedLevelsChecked: boolean;
  availableLevelsDisabled: boolean;
  onAvailableLevelsChange: () => void;
  onCompletedLevelsChange: () => void;
};

const LevelSelectionFilters: React.FC<LevelSelectionFiltersProps> = ({
  availableLevelsChecked,
  availableLevelsDisabled,
  completedLevelsChecked,
  onAvailableLevelsChange,
  onCompletedLevelsChange,
}) => {
  return (
    <div>
      <AvailableLevelsFilter
        checked={availableLevelsChecked}
        handleChange={onAvailableLevelsChange}
        disabled={availableLevelsDisabled}
      />
      <CompletedLevelsSwitch
        checked={completedLevelsChecked}
        onCheckedChange={onCompletedLevelsChange}
        disabled={false}
      />
    </div>
  );
};

export default LevelSelectionFilters;
