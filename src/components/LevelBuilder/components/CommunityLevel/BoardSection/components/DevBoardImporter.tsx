import { colorNames } from "@/utils/colors";

interface DevBoardImporterProps {
  setBoard: (board: (string | null)[][]) => void;
  setBoardSize: (size: number) => void;
  setRegionColors: React.Dispatch<
    React.SetStateAction<Record<string, keyof typeof colorNames>>
  >;
  initialRegionColors: Record<string, keyof typeof colorNames>;
}

const DevBoardImporter = ({
  setBoard,
  setBoardSize,
  setRegionColors,
  initialRegionColors,
}: DevBoardImporterProps) => {
  return (
    <textarea
      className="w-full h-32"
      onChange={(e) => {
        const value = e.target.value;

        if (value.trim() === "") return;

        // Step 1: Clean the string to make it valid JSON
        // - Wrap letters in quotes to make them strings
        // - Remove trailing commas
        // - Wrap the entire string in square brackets
        const cleanedString = value
          .replace(/[A-K]/g, '"$&"') // Add quotes around single letters A-G
          .replace(/,\s*]/g, "]") // Remove trailing commas before closing brackets
          .trim() // Remove any leading/trailing whitespace
          .replace(/,\s*$/, ""); // Remove any trailing comma at the end

        // Step 2: Wrap in square brackets if not already (since it's a 2D array)
        const jsonString = `[${cleanedString}]`;

        // Step 3: Parse the string into an array
        const resultArray = JSON.parse(jsonString);

        const newBoard = resultArray;
        const newSize = newBoard.length;
        setBoardSize(newSize);
        const updatedRegionKeys = "ABCDEFGHIJKLM".slice(0, newSize);
        setRegionColors(
          Object.fromEntries(
            updatedRegionKeys
              .split("")
              .map((key) => [
                key,
                initialRegionColors[key as keyof typeof initialRegionColors],
              ]),
          ),
        );
        setBoard(newBoard);
      }}
    />
  );
};

export default DevBoardImporter;
