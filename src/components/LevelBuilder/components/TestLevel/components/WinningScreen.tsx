import { useTranslation } from "react-i18next";
import CloseIcon from "@/components/icons/CloseIcon";

interface WinningScreenProps {
  close: () => void;
}

const WinningScreen = ({ close }: WinningScreenProps) => {
  const { t } = useTranslation();

  return (
    <div className="absolute flex flex-col items-center justify-center text-center rounded-lg bg-purple text-white text-xl w-52 h-52  max-h-full max-w-full font-bold p-2 select-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-95">
      <button className="absolute right-3 top-3" onClick={close}>
        <CloseIcon />
      </button>
      <div className="text-2xl mb-6">{t("YOU_WIN")}</div>

      <div className="flex flex-col space-y-3"></div>
    </div>
  );
};

export default WinningScreen;
