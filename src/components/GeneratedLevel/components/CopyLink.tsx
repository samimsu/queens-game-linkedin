import { Button } from "@/components/ui/button.tsx";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface CopyLinkProps {
  href: string;
}

const CopyLink = (input: CopyLinkProps) => {
  const { t } = useTranslation();

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(input.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Button variant="ghost" onClick={handleCopy}>
      {copied ? t("COPIED") : t("COPY_LINK")}
    </Button>
  );
};

export default CopyLink;
