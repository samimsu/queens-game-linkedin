import DiscordIcon from "@/components/icons/DiscordIcon";
import { discord } from "@/data/links";

const DiscordButton = () => {
  return (
    <div>
      <a href={discord} target="_blank" rel="noopener noreferrer">
        <DiscordIcon />
      </a>
    </div>
  );
};

export default DiscordButton;
