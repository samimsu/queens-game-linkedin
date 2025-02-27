import React from "react";
import { HeartHandshake } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Patreon } from "@/data/links";

const SupportMeIconButton = () => {
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger>
          <a href={Patreon} target="_blank" rel="noopener noreferrer">
            <HeartHandshake color="#ee2677" />
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p>Support me</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SupportMeIconButton;
