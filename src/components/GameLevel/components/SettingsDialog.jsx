import SettingsIcon from "@/components/icons/SettingsIcon";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { useTranslation } from "react-i18next";

const SettingsDialog = ({
  showClashingQueens,
  toggleShowClashingQueens,
  showInstructions,
  toggleShowInstructions,
  autoPlaceXs,
  toggleAutoPlaceXs,
  showClock,
  toggleShowClock,
}) => {
  const { t } = useTranslation();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="border border-slate-500 rounded-full p-2">
          <SettingsIcon size="18" />
        </button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[425px] bg-background"
        aria-describedby={undefined}
      >
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
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsDialog;
