import Required from "@/components/Required";

type LevelType = "linkedin" | "community";

interface LevelBuilderSelectorProps {
  levelType: "linkedin" | "community";
  setLevelType: (type: string) => void;
}

const LevelBuilderSelector = ({
  levelType,
  setLevelType,
}: LevelBuilderSelectorProps) => {
  const handleSelection = (type: LevelType) => {
    setLevelType(type);
  };

  return (
    <div className="max-w-lg">
      <p className="mb-1">
        Level Type <Required />
      </p>

      <div className="grid sm:grid-cols-2 gap-2 sm:gap-4">
        <button
          className={`flex bg-gray-50 dark:bg-gray-800 border ${
            levelType === "community"
              ? "border-primary bg-blue-50"
              : "border-gray-500"
          } rounded-lg p-2 w-56 text-left hover:border-primary transition-all duration-300 hover:-translate-y-1`}
          onClick={() => handleSelection("community")}
        >
          <div>
            <h2
              className={`text-md font-semibold ${
                levelType === "community" ? "text-primary" : ""
              }`}
            >
              Community Level
            </h2>
            <p className="text-gray-600 dark:text-gray-100 text-sm">
              Create your own level for the community
            </p>
          </div>
        </button>

        <button
          className={`flex bg-gray-50 dark:bg-gray-800 border ${
            levelType === "linkedin"
              ? "border-primary bg-blue-50"
              : "border-gray-500"
          } rounded-lg p-2 w-56 text-left hover:border-primary transition-all duration-300 hover:-translate-y-1`}
          onClick={() => handleSelection("linkedin")}
        >
          <div>
            <h2
              className={`text-md font-semibold 
            ${levelType === "linkedin" ? "text-primary" : ""}`}
            >
              LinkedIn Level
            </h2>
            <p className="text-gray-600 dark:text-gray-100 text-sm">
              Clone levels from the original game
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default LevelBuilderSelector;
