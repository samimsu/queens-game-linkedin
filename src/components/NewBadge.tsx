import { useTranslation } from "react-i18next";

interface NewBadgeProps {
  className?: string;
}

const NewBadge = ({ className = "" }: NewBadgeProps) => {
  const { t } = useTranslation();
  return (
    <div
      className={`rounded bg-yellow-500 text-white px-1 text-xs ${className}`}
    >
      {t("NEW")}
    </div>
  );
};

export default NewBadge;
