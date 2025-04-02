import React, { useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import CardInfo, { CardType } from "../../CardInfo";

type HintRef = {
  resetStuckTimer: () => void
}

type HintsProps = {
  message: React.ReactNode;
  onClose?: () => void;
  ref?: React.MutableRefObject<HintRef>
};

const SHOW_STUCK_MESSAGE_AFTER_SECONDS = 20;

const Hints: React.FC<HintsProps> = ({ message, onClose, ref }) => {
  const { t } = useTranslation();
  const [showStuckMessage, setShowStuckMessage] = useState<boolean>(false)
  const timeoutId = useRef<NodeJS.Timeout>()

  useImperativeHandle(ref, () => ({
    resetStuckTimer: () => {
      resetStuckTimer()
    },
  }));

  const resetStuckTimer = useCallback(() => {
    setShowStuckMessage(false)
    clearTimeout(timeoutId.current)
    timeoutId.current = setTimeout(() => {
      setShowStuckMessage(true)
    }, SHOW_STUCK_MESSAGE_AFTER_SECONDS * 1000)
  }, [])

  useEffect(() => {
    resetStuckTimer()
    return () => clearTimeout(timeoutId.current)
  }, [])

  return (
    <>
      {!message && showStuckMessage &&
        <CardInfo
          type={CardType.Fixed}
        >
          <Trans
            i18nKey="HINTS.STUCK_MESSAGE"
            components={{ a: <a />}}              
          />
        </CardInfo>
      }
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
