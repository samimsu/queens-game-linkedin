import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

type SubmitButtonProps = {
  handleSubmit: () => void;
  isSubmitting: boolean;
};

const SubmitButton = ({ handleSubmit, isSubmitting }: SubmitButtonProps) => {
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
    </div>
  );
};

export default SubmitButton;
