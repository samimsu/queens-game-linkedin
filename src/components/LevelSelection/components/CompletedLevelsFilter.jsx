import QuestionMarkTooltip from "@/components/QuestionMarkTooltip";
import { Switch } from "@/components/ui/switch";
import React from "react";
import { useTranslation } from "react-i18next";

const CompletedLevelsFilter = ({ checked, disabled, handleChange }) => {
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
        {t("HIDE_COMPLETED_LEVELS")}
      </label>
    </div>
  );
};

export default CompletedLevelsFilter;
