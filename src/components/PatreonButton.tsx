import { useTheme } from "next-themes";
import { patreon } from "@/data/links";
import patreonIconBlack from "@/assets/patreon-black.svg";
import patreonIconWhite from "@/assets/patreon-white.svg";
import { trackEvent } from "@/utils/analytics";

const PatreonButton = () => {
  const { theme } = useTheme();
  return (
    <div>
      <a
        href={patreon}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackEvent("click_external_link", {
            link_url: patreon,
            link_name: "patreon",
          })
        }
      >
        <img
          src={theme === "dark" ? patreonIconWhite : patreonIconBlack}
          className="h-4 sm:h-5"
        />
      </a>
    </div>
  );
};

export default PatreonButton;
