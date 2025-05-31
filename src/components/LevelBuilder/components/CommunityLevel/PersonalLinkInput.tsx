import React from "react";

interface PersonalLinkInputProps {
  ref?: React.Ref<HTMLInputElement>;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
}

const PersonalLinkInput = ({
  ref,
  value,
  onChange,
  error,
}: PersonalLinkInputProps) => {
  return (
    <div className="max-w-lg">
      <div className="grid sm:grid-cols-2 sm:gap-4 items-center">
        <label className="flex flex-col">
          <span>Personal Link</span>
          <span className="text-sm">(Website, GitHub, Instagram etc.)</span>
        </label>
        <div>
          <input
            ref={ref}
            placeholder="https://github.com/user"
            name="personalLink"
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

export default PersonalLinkInput;
