import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

type SubmitButtonProps = {
  handleSubmit: () => void;
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
  return (
    <div className="pt-2 flex space-x-2 items-center">
      <Button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="hover:bg-primary hover:opacity-90"
      >
        {isSubmitting ? "Submitting..." : "Submit Level"}
      </Button>
      {via === "email" && (
        <>
          <span>or</span>
          <Button variant="outline" onClick={handleCopy}>
            {copied ? (
              <span className="flex items-center space-x-1">
                <span>Copied</span>
                <Check size={16} />
              </span>
            ) : (
              "Copy details"
            )}
          </Button>
        </>
      )}
    </div>
  );
};

export default SubmitButton;
