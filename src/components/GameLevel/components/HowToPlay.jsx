import React from "react";
import Queen from "../../Queen";
import { useTranslation, Trans } from "react-i18next";
import CardInfo from "@/components/CardInfo";

const HowToPlay = () => {
  const { t } = useTranslation();

  return (
    <CardInfo title={`${t('HOW_TO_PLAY')}:`} type="collapsible">
      <div className="self-start mt-6 mb-16 mx-2">
        <ol className="list-decimal space-y-2">
          <li className="ml-4">
            <Trans i18nKey="GAME_GOAL_INSTRUCTION">
              - <b className="font-medium"> </b>
              <Queen size="20" className="inline mx-1 mb-1" />
              <b className="font-medium"></b>
            </Trans>
          </li>
          <li className="ml-4">
            <Trans i18nKey="TAPS_INSTRUCTION">
              - <Queen size="20" className="inline mx-1 mb-1" />
              <Queen size="20" className="inline mx-1 mb-1" />
            </Trans>
          </li>
          <li className="ml-4">
            <Trans i18nKey="TOUCH_DIAGONAL_QUEENS_INSTRUCTION">
              - <Queen size="20" className="inline mx-1 mb-1" />
            </Trans>
          </li>
        </ol>
      </div>
    </CardInfo>
  );
};

export default HowToPlay;
