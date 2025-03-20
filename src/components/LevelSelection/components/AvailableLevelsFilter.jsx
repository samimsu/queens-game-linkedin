import QuestionMarkTooltip from "@/components/QuestionMarkTooltip";
import { Switch } from "@/components/ui/switch";
import React from "react";
import { useTranslation } from "react-i18next";

const AvailableLevelsFilter = ({ checked, disabled, handleChange }) => {
  const { t } = useTranslation();
  return (
    <div
      className={`flex items-center self-start px-1 ${
        disabled ? "opacity-50" : ""
      }`}
    >
      <Switch
        checked={checked}
        onCheckedChange={handleChange}
        disabled={disabled}
      />
      <label onClick={!disabled ? handleChange : () => {}} className="pl-2">
        {t("AVAILABLE_LEVELS_ONLY")}
      </label>
      <div className="relative ml-2">
        <QuestionMarkTooltip disabled={disabled} tooltipText={t("HELP_IN_FINDING_NEW_LEVELS")}/>
      </div>
    </div>
  );
};

export default AvailableLevelsFilter;
