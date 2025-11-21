import GithubStarButton from "./GithubStarButton";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="px-2 space-y-3">
      <div className="flex justify-center items-center space-x-3 mx-auto w-fit">
        <div className="h-7">
          <GithubStarButton />
        </div>
      </div>
      <div className="mx-auto w-fit flex items-center space-x-3 text-sm text-muted-foreground">
        <div>
          {t("EDUCATIONAL_PROJECT") || "An open-source educational project"}
        </div>
        <div className="border-l border-slate-700 pl-3">
          <a
            href="https://github.com/trexwe/queens-game-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-medium hover:text-foreground transition-colors"
          >
            {t("CONTRIBUTE") || "Contribute on GitHub"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
