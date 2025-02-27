import React from "react";
import supportMeOnPatreonImg from "@/assets/support-me-on-patreon.png";
import { patreon } from "@/data/links";

const PatreonButton = () => {
  return (
    <a href={patreon} target="_blank" rel="noopener noreferrer">
      <img
        src={supportMeOnPatreonImg}
        alt="Support me on Patreon"
        className="w-32 rounded-full"
      />
    </a>
  );
};

export default PatreonButton;
