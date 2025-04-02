import React, { useState, PropsWithChildren, useCallback } from "react";
import CollapseIcon from "./icons/CollapseIcon";
import CloseIcon from "./icons/CloseIcon";

export enum CardType {
  Collapsible = "collapsible",
  Closable = "closable",
  Fixed = "fixed"
}

interface CardInfoProps extends PropsWithChildren {
  title?: string;
  type: CardType;
  onClose?: () => void;
};

const CardInfo: React.FC<CardInfoProps> = ({ title, children, type, onClose }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleClick = useCallback(() => {
    if (type === CardType.Collapsible) {
      setIsCollapsed((prev) => !prev);
    } else if (type === CardType.Closable && onClose) {
      onClose();
    }
  }, [type, onClose]);

  const getIcon = useCallback((type: CardType): React.ReactElement | null => {
    switch (type) {
      case CardType.Collapsible:
        return <CollapseIcon isCollapsed={isCollapsed} />;
      case CardType.Closable:
        return <CloseIcon />;
      case CardType.Fixed:
        return null;
      default:
        throw new Error("CardType not defined");
    }
  }, [type, isCollapsed]);

  return (
    <div className={`rounded-[4px] p-[12px 20px 16px] pt-[12px] pl-[20px] pr-[20px] pb-[16px] mt-[12px] w-full border border-solid`}>
      <div className="flex justify-between">
        {title && <h2 className="font-medium">{title}</h2>}
        <button className="w-[32px] h-[32px]" onClick={handleClick}>
          {getIcon(type)}
        </button>
      </div>
      {!isCollapsed && children}
    </div>
  );
};

export default CardInfo;
