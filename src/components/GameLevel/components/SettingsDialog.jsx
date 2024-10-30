import SettingsIcon from "@/components/icons/SettingsIcon";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";

const SettingsDialog = ({
  showClashingQueens,
  toggleShowClashingQueens,
  showInstructions,
  toggleShowInstructions,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="border border-slate-500 rounded-full p-2">
          <SettingsIcon size="18" />
        </button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[425px] bg-[#f7f0dd]"
        aria-describedby={undefined}
      >
        <DialogHeader>
          <DialogTitle className="mb-2">Settings</DialogTitle>
        </DialogHeader>
        <div className="space-y-1 h-40">
          <div className="flex items-center justify-between space-x-3">
            <div>Show clashing queens</div>
            <Switch
              checked={showClashingQueens}
              onCheckedChange={toggleShowClashingQueens}
            />
          </div>
          <div className="flex items-center justify-between space-x-3">
            <div>Show instructions</div>
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
