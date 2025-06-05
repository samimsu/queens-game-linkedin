import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  setShowCompletedCommunityLevelsPreference,
  setShowMultipleCommunityLevelsPreference,
  setShowNotCompletedCommunityLevelsPreference,
  setShowUniqueCommunityLevelsPreference,
} from "@/utils/localStorage";

const FilterButton = ({
  active,
  children,
  ...props
}: {
  active: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <Button
      className={`m-1 ${
        active
          ? "text-white hover:text-white bg-primary hover:bg-primary"
          : "bg-transparent hover:bg-transparent"
      }`}
      variant="outline"
      size="sm"
      {...props}
    >
      {children}
    </Button>
  );
};

type CommunityLevelsFiltersProps = {
  showUnique: boolean;
  setShowUnique: (value: boolean) => void;
  showMultiple: boolean;
  setShowMultiple: (value: boolean) => void;
  showCompleted: boolean;
  setShowCompleted: (value: boolean) => void;
  showNotCompleted: boolean;
  setShowNotCompleted: (value: boolean) => void;
};

const CommunityLevelsFilters = ({
  showUnique,
  setShowUnique,
  showMultiple,
  setShowMultiple,
  showCompleted,
  setShowCompleted,
  showNotCompleted,
  setShowNotCompleted,
}: CommunityLevelsFiltersProps) => {
  const { t } = useTranslation();

  const handleFilterChange = (filter: string) => {
    switch (filter) {
      case "unique":
        setShowUnique(!showUnique);
        setShowMultiple(false);
        setShowUniqueCommunityLevelsPreference(!showUnique);
        setShowMultipleCommunityLevelsPreference(false);
        break;
      case "multiple":
        setShowMultiple(!showMultiple);
        setShowUnique(false);
        setShowMultipleCommunityLevelsPreference(!showMultiple);
        setShowUniqueCommunityLevelsPreference(false);
        break;
      case "completed":
        setShowCompleted(!showCompleted);
        setShowNotCompleted(false);
        setShowCompletedCommunityLevelsPreference(!showCompleted);
        setShowNotCompletedCommunityLevelsPreference(false);
        break;
      case "notCompleted":
        setShowNotCompleted(!showNotCompleted);
        setShowCompleted(false);
        setShowNotCompletedCommunityLevelsPreference(!showNotCompleted);
        setShowCompletedCommunityLevelsPreference(false);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <FilterButton
        active={showUnique}
        onClick={() => handleFilterChange("unique")}
      >
        {t("UNIQUE_SOLUTIONS")}
      </FilterButton>
      <FilterButton
        active={showMultiple}
        onClick={() => handleFilterChange("multiple")}
      >
        {t("MULTIPLE_SOLUTIONS")}
      </FilterButton>
      <FilterButton
        active={showCompleted}
        onClick={() => handleFilterChange("completed")}
      >
        {t("COMPLETED")}
      </FilterButton>
      <FilterButton
        active={showNotCompleted}
        onClick={() => handleFilterChange("notCompleted")}
      >
        {t("NOT_COMPLETED")}
      </FilterButton>
      <Button
        variant="ghost"
        className="text-xs hover:bg-transparent"
        onClick={() => {
          setShowUniqueCommunityLevelsPreference(false);
          setShowMultipleCommunityLevelsPreference(false);
          setShowCompletedCommunityLevelsPreference(false);
          setShowNotCompletedCommunityLevelsPreference(false);
          setShowUnique(false);
          setShowMultiple(false);
          setShowCompleted(false);
          setShowNotCompleted(false);
        }}
        disabled={
          !showUnique && !showMultiple && !showCompleted && !showNotCompleted
        }
      >
        {t("CLEAR_ALL")}
      </Button>
    </div>
  );
};

export default CommunityLevelsFilters;
