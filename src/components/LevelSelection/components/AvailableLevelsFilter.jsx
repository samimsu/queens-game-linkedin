import QuestionIcon from "@/components/icons/QuestionIcon";
import { Switch } from "@/components/ui/switch";
import React from "react";
import { useTranslation } from "react-i18next";

const AvailableLevelsFilter = ({ checked, disabled, handleChange }) => {
  const { t } = useTranslation()
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
        {t('AVAILABLE_LEVELS_ONLY')}
      </label>
      <div className="relative ml-2 group">
        <QuestionIcon />
        {!disabled && (
          <span className="absolute top-5 right-0 text-xs min-w-40 bg-white dark:bg-gray-800 p-2 rounded-md border-2 border-slate-300 z-10 hidden group-hover:flex">
            {t('HELP_IN_FINDING_NEW_LEVELS')}
          </span>
        )}
      </div>
    </div>
  );
};

export default AvailableLevelsFilter;
