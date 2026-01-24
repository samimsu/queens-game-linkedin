import React from "react";
import { useTranslation } from "react-i18next";
import Required from "@/components/Required";

interface CreatedByInputProps {
  ref?: React.Ref<HTMLInputElement>;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  error?: string | null;
}

const CreatedByInput = ({
  ref,
  value,
  onChange,
  error,
}: CreatedByInputProps) => {
  const { t } = useTranslation();

  return (
    <div className="max-w-lg">
      <div className="grid sm:grid-cols-2 sm:gap-4 items-center">
        <label className="w-56">
          {t("CREATED_BY_3")} <Required />
        </label>
        <div>
          <input
            placeholder={t("YOUR_NAME_NICKNAME")}
            ref={ref}
            name="createdBy"
            value={value}
            onChange={onChange}
            className={`border rounded px-3 py-2 w-56 ${
              error ? "border-red-500" : "border-slate-500"
            }`}
          />
          {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default CreatedByInput;
