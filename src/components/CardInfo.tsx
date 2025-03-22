import React, { useState } from "react";
import CollapseIcon from "./icons/CollapseIcon";
import CloseIcon from "./icons/CloseIcon";
import { useTheme } from "next-themes";

enum CardType {
  Collapsible = "collapsible",
  Closable = "closable",
}

type CardInfoProps = {
  title: string;
  children: React.ReactNode;
  type: CardType;
  isCollapsed?: boolean;
  onClose?: () => void;
};

const CardInfo: React.FC<CardInfoProps> = ({ title = "", children, type, onClose }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { theme } = useTheme();

  const handleClick = () => {
    switch (type) {
      case CardType.Collapsible: {
        setIsCollapsed(!isCollapsed);
        break;
      }
      case CardType.Closable: {
        onClose && onClose();
        break;
      }
    }
  };

  return (
    <div className={`rounded-[4px] p-[12px 20px 16px] pt-[12px] pl-[20px] pr-[20px] pb-[16px] mt-[12px] w-full border border-solid border-[${theme === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'white'}]`}>
      <div className="flex justify-between">
        <h2 className="font-medium">{title}</h2>
        <button className="w-[32px] h-[32px]" onClick={handleClick}>
          {type == CardType.Collapsible ? (
            <CollapseIcon isCollapsed={isCollapsed} />
          ) : (
            <CloseIcon />
          )}
        </button>
      </div>
      {!isCollapsed && children}
    </div>
  );
};

export default CardInfo;
