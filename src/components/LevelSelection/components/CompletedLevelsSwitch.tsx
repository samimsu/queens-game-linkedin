import { useTranslation } from "react-i18next";
// @ts-ignore
import { Switch } from "@/components/ui/switch";

type CompletedLevelsSwitchProps = {
  checked: boolean
  disabled: boolean
  onCheckedChange: () => void
}

const CompletedLevelsSwitch: React.FC<CompletedLevelsSwitchProps> = ({ checked, disabled, onCheckedChange }) => {
  const { t } = useTranslation();
  return (
    <div
      className={`flex items-center self-start px-1 ${
        disabled ? "opacity-50" : ""
      }`}
    >
      <Switch
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
      />
      <label onClick={!disabled ? onCheckedChange : () => {}} className="pl-2">
        {t("HIDE_COMPLETED_LEVELS")}
      </label>
    </div>
  );
};

export default CompletedLevelsSwitch;
