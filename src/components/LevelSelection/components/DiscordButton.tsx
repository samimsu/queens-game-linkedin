import DiscordIcon from "@/components/icons/DiscordIcon";
import { discord } from "@/data/links";
import { trackEvent, ANALYTICS_EVENTS } from "@/utils/analytics";

const DiscordButton = () => {
  return (
    <div>
      <a
        href={discord}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackEvent(ANALYTICS_EVENTS.CLICK_EXTERNAL_LINK, {
            link_url: discord,
            link_name: "discord",
          })
        }
      >
        <DiscordIcon className="h-4 sm:h-5" />
      </a>
    </div>
  );
};

export default DiscordButton;
