import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import TestLevel from "../../../TestLevel/TestLevel";
import { TestLevel as TestLevelType } from "@/utils/types";

interface TestLevelDialogProps {
  level: TestLevelType;
  disabled?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const TestLevelDialog = ({
  level,
  disabled,
  open,
  onOpenChange,
}: TestLevelDialogProps) => {
  const { t } = useTranslation();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger>
        <Button
          disabled={disabled}
          className="hover:bg-primary hover:opacity-90"
          type="button"
        >
          {t("TEST_LEVEL")}
        </Button>
      </DialogTrigger>
      {/* @ts-expect-error */}
      <DialogContent className="max-w-fit bg-background max-h-full overflow-y-auto overflow-x-auto">
        <div className="sr-only">
          <DialogHeader>
            {/* @ts-expect-error */}
            <DialogTitle>Test Level</DialogTitle>
          </DialogHeader>
        </div>
        <TestLevel title="Test Level" level={level} />
      </DialogContent>
    </Dialog>
  );
};

export default TestLevelDialog;
