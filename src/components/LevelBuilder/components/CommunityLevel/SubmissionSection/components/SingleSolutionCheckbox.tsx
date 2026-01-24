import React from "react";
import { useTranslation } from "react-i18next";

interface SingleSolutionCheckboxProps {
  ref?: React.Ref<HTMLInputElement>;
  value: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onTestClick: () => void;
  testDialogDisabled: boolean;
  error?: string | null;
}

const SingleSolutionCheckbox = ({
  ref,
  value,
  onChange,
  onTestClick,
  testDialogDisabled,
  error,
}: SingleSolutionCheckboxProps) => {
  const { t } = useTranslation();

  return (
    <div>
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          ref={ref}
          name="singleSolution"
          checked={value}
          onChange={onChange}
          className="h-4 w-4"
        />
        <span>
          <span>{t("ONLY_1_SOLUTION")} </span>
          <span>
            Test{" "}
            <span
              className="text-blue-500"
              onClick={(e) => {
                if (testDialogDisabled) return;
                e.preventDefault();
                onTestClick();
              }}
            >
              here.
            </span>
          </span>
        </span>
      </label>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default SingleSolutionCheckbox;
