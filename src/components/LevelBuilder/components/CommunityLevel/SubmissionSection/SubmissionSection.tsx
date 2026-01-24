import useLevelBuilderLogic from "@/hooks/useLevelBuilderLogic";
import SingleSolutionCheckbox from "./components/SingleSolutionCheckbox";
import SubmitButton from "./components/SubmitButton";
import SubmitViaSection from "./components/SubmitViaSection";

interface SubmissionSectionProps {
  state: ReturnType<typeof useLevelBuilderLogic>["state"];
  actions: ReturnType<typeof useLevelBuilderLogic>["actions"];
  refs: ReturnType<typeof useLevelBuilderLogic>["refs"];
}

const SubmissionSection = ({
  state,
  actions,
  refs,
}: SubmissionSectionProps) => {
  return (
    <>
      {/* Submit Via */}
      {state.isCommunityLevel && (
        <SubmitViaSection
          via={state.formData.submitVia}
          handleInputChange={actions.handleCommunityFormInputChange}
        />
      )}

      <SingleSolutionCheckbox
        ref={refs.singleSolution}
        value={state.formData.singleSolution}
        onChange={actions.handleCommunityFormInputChange}
        onTestClick={() => actions.setIsTestDialogOpen(true)}
        testDialogDisabled={state.board.some((row) =>
          row.some((cell) => !cell),
        )}
        error={state.errors.singleSolution}
      />

      {/* Submit Button */}
      {state.isCommunityLevel && (
        <div className="flex flex-col space-y-1">
          <SubmitButton
            handleSubmit={actions.handleCommunityFormSubmit}
            isSubmitting={state.isSubmitting}
            via={state.formData.submitVia}
            handleCopy={actions.handleCopyCommunityLevelEmailDetails}
            copied={state.copiedEmailDetails}
          />

          {!state.isSubmitting && state.errors.submit && (
            <p className="text-red-500 text-xs mb-1">{state.errors.submit}</p>
          )}
        </div>
      )}
    </>
  );
};

export default SubmissionSection;
