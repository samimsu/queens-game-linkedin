import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

type SubmitButtonProps = {
  handleSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
  via: string;
  handleCopy: () => void;
  copied: boolean;
};

const SubmitButton = ({
  handleSubmit,
  isSubmitting,
  via,
  handleCopy,
  copied,
}: SubmitButtonProps) => {
  const { t } = useTranslation();

  return (
    <div className="pt-2 flex space-x-2 items-center">
      <Button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="hover:bg-primary hover:opacity-90"
      >
        {isSubmitting ? `${t("SUBMITTING")}...` : t("SUBMIT_LEVEL")}
      </Button>
      {via === "email" && (
        <>
          <span>{t("OR")}</span>
          <Button variant="outline" onClick={handleCopy}>
            {copied ? (
              <span className="flex items-center space-x-1">
                <span>{t("COPIED")}</span>
                <Check size={16} />
              </span>
            ) : (
              <span>{t("COPY_DETAILS")}</span>
            )}
          </Button>
        </>
      )}
    </div>
  );
};

export default SubmitButton;
