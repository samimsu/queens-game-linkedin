import React from "react";
import { useTranslation } from "react-i18next";
import { patreon } from "@/data/links";

type PatreonButtonProps = {};

const PatreonButton: React.FC<PatreonButtonProps> = () => {
  const { t } = useTranslation();
  return (
    <a href={patreon} target="_blank" rel="noopener noreferrer">
      <div class="bg-[#F96C51] pt-[7px] pl-[14px] pr-[10px] pb-[10px] rounded-[30px] w-full h-[35px] flex justify-between items-start">
        <span class="w-[4px] h-[21px] bg-[#062A49]"></span>
        <span class="w-[16px] h-[16px] bg-[white] rounded-[50%] ml-[2px] mr-[6px]"></span>
        <span class="text-white text-[11px] uppercase mt-[-2px] font-medium tracking-wider leading-[12px] w-[77px]">
          {t("SUPPORT_ME_ON_PATREON")}
        </span>
      </div>
    </a>
  );
};

export default PatreonButton;
