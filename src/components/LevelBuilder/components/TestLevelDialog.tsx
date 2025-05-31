import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import TestLevel from "./TestLevel/TestLevel";
import { TestLevel as TestLevelType } from "@/utils/types";

interface TestLevelDialogProps {
  level: TestLevelType;
  disabled?: boolean;
}

const TestLevelDialog = ({ level, disabled }: TestLevelDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          disabled={disabled}
          className="hover:bg-primary hover:opacity-90"
          type="button"
        >
          Test Level
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-fit bg-background max-h-full overflow-y-auto overflow-x-auto">
        <div className="hidden">
          <DialogHeader>
            <DialogTitle>
              <div>Test Level</div>
            </DialogTitle>
          </DialogHeader>
        </div>
        <TestLevel title="Test Level" level={level} />
      </DialogContent>
    </Dialog>
  );
};

export default TestLevelDialog;
