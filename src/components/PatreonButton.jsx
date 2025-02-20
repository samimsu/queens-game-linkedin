import React from "react";
import supportMeOnPatreonImg from "@/assets/support-me-on-patreon.png";

const PatreonButton = () => {
  return (
    <a
      href="https://www.patreon.com/bePatron?u=150896336"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={supportMeOnPatreonImg}
        alt="Support me on Patreon"
        className="w-32 rounded-full"
      />
    </a>
  );
};

export default PatreonButton;
