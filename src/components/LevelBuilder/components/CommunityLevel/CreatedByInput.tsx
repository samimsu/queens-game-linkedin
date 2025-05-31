import React from "react";
import Required from "@/components/Required";

interface CreatedByInputProps {
  ref?: React.Ref<HTMLInputElement>;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
}

const CreatedByInput = ({
  ref,
  value,
  onChange,
  error,
}: CreatedByInputProps) => {
  return (
    <div className="max-w-lg">
      <div className="grid sm:grid-cols-2 sm:gap-4 items-center">
        <label className="w-56">
          Created By <Required />
        </label>
        <div>
          <input
            placeholder="Your name/nickname"
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
