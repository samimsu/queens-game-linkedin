import React from "react";
import { HeartHandshake } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { patreon } from "@/data/links";

const SupportMeIconButton = () => {
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger>
          <a href={patreon} target="_blank" rel="noopener noreferrer">
            <HeartHandshake color="#FF3131" />
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
