import React from "react";
import { HeartHandshake } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { patreon } from "@/data/links";
import { useTranslation } from "react-i18next";

const SupportMeIconButton = () => {
  const { t } = useTranslation()

  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger>
          <a href={patreon} target="_blank" rel="noopener noreferrer">
            <HeartHandshake color="#FF3131" />
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p>{t('SUPPORT_ME')}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SupportMeIconButton;
