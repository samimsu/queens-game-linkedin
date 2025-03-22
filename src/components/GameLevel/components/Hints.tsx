import React from "react";
import CardInfo, { CardType } from "@/components/CardInfo";
import { useTranslation } from "react-i18next";

type HintsProps = {
  message: React.ReactNode;
  onClose?: () => void;
};

const Hints: React.FC<HintsProps> = ({ message, onClose }) => {
  const { t } = useTranslation();

  return (
    <>
      {message && 
        <CardInfo
          title={`${t("HINT")}:`}
          type={CardType.Closable}
          onClose={onClose}
        >
          {message}
        </CardInfo>
      }
    </>
  )
};

export default Hints;
