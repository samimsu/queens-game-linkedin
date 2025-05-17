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
import { RotateCcw } from "lucide-react";
import { useTranslation } from "react-i18next";

const ResetAllProgressDialog = ({ onReset }) => {
  const { t } = useTranslation();
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <RotateCcw />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t("RESET")}</AlertDialogTitle>
          <AlertDialogDescription>
            {t("ASK_RESET_ALL_PROGRESS")}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="border-[#e4e4e7]">
            {t("CANCEL")}
          </AlertDialogCancel>
          <AlertDialogAction
            className="hover:bg-primary hover:opacity-90"
            onClick={() => {
              resetCompletedLevels();
              onReset();
            }}
          >
            {t("YES")}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ResetAllProgressDialog;
