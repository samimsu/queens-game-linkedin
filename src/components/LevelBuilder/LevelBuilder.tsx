import { useTranslation } from "react-i18next";
import LevelBuilderSelector from "./components/LevelBuilderSelector";
import Note from "./components/CommunityLevel/Note";
import CreatedByInput from "./components/CommunityLevel/CreatedByInput";
import PersonalLinkInput from "./components/CommunityLevel/PersonalLinkInput";
import useLevelBuilderLogic from "@/hooks/useLevelBuilderLogic";
import SubmissionSection from "./components/CommunityLevel/SubmissionSection/SubmissionSection";
import BoardSection from "./components/CommunityLevel/BoardSection/BoardSection";

const LevelBuilder = () => {
  const { t } = useTranslation();
  const { state, actions, refs } = useLevelBuilderLogic();

  return (
    <div className="mt-2 mx-2 sm:mx-8">
      <h1 className="text-4xl mb-6">{t("LEVEL_BUILDER")}</h1>

      <div className="flex flex-col space-y-2">
        <LevelBuilderSelector
          levelType={state.levelType}
          setLevelType={actions.setLevelType}
        />

        {state.isCommunityLevel && (
          <>
            <Note />
            <CreatedByInput
              ref={refs.createdBy}
              value={state.formData.createdBy}
              onChange={actions.handleCommunityFormInputChange}
              error={state.errors.createdBy}
            />

            <PersonalLinkInput
              ref={refs.personalLink}
              value={state.formData.personalLink}
              onChange={actions.handleCommunityFormInputChange}
              error={state.errors.personalLink}
            />
          </>
        )}

        <BoardSection state={state} actions={actions} refs={refs} />

        <SubmissionSection state={state} actions={actions} refs={refs} />
      </div>
    </div>
  );
};

export default LevelBuilder;
