import ResetIcon from "@/components/icons/ResetIcon";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { resetCompletedLevels } from "@/utils/localStorage";

const ResetAllProgressDialog = ({ onReset }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <ResetIcon size="24" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Reset</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to reset all progress?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="border-[#e4e4e7]">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="hover:bg-primary hover:opacity-90"
            onClick={() => {
              resetCompletedLevels();
              onReset();
            }}
          >
            Yes
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ResetAllProgressDialog;
