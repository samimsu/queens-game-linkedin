import { useTranslation } from "react-i18next";
import SettingsIcon from "@/components/icons/SettingsIcon";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";

interface SettingsDialogProps {
  showClashingQueens: boolean;
  toggleShowClashingQueens: (checked: boolean) => void;
  showInstructions: boolean;
  toggleShowInstructions: (checked: boolean) => void;
  autoPlaceXs: boolean;
  toggleAutoPlaceXs: (checked: boolean) => void;
  showClock: boolean;
  toggleShowClock: (checked: boolean) => void;
  dragToUncheck: boolean;
  toggleDragToUncheck: (checked: boolean) => void;
}

const SettingsDialog: React.FC<SettingsDialogProps> = ({
  showClashingQueens,
  toggleShowClashingQueens,
  showInstructions,
  toggleShowInstructions,
  autoPlaceXs,
  toggleAutoPlaceXs,
  showClock,
  toggleShowClock,
  dragToUncheck,
  toggleDragToUncheck,
}) => {
  const { t } = useTranslation();

  return (
    <Dialog>
      <DialogTrigger>
        <button className="border border-slate-500 rounded-full p-2">
          <SettingsIcon size="18" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-background">
        <DialogHeader>
          <DialogTitle className="mb-2">{t("SETTINGS")}</DialogTitle>
        </DialogHeader>
        <div className="space-y-1 h-40">
          <div className="flex items-center justify-between space-x-3">
            <div>{t("SHOW_CLOCK")}</div>
            <Switch checked={showClock} onCheckedChange={toggleShowClock} />
          </div>
          <div className="flex items-center justify-between space-x-3">
            <div>{t("AUTO_PLACE_XS")}</div>
            <Switch checked={autoPlaceXs} onCheckedChange={toggleAutoPlaceXs} />
          </div>
          <div className="flex items-center justify-between space-x-3">
            <div>{t("SHOW_CLASHING_QUEENS")}</div>
            <Switch
              checked={showClashingQueens}
              onCheckedChange={toggleShowClashingQueens}
            />
          </div>
          <div className="flex items-center justify-between space-x-3">
            <div>{t("SHOW_INSTRUCTIONS")}</div>
            <Switch
              checked={showInstructions}
              onCheckedChange={toggleShowInstructions}
            />
          </div>
          <div className="flex items-center justify-between space-x-3">
            <div>{t("DRAG_TO_UNCHECK")}</div>
            <Switch
              checked={dragToUncheck}
              onCheckedChange={toggleDragToUncheck}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsDialog;
