import { Button } from "@/components/ui/button.tsx";

interface GenerateButtonProps {
  boardSize: number;
  onClick?: () => void;
  title?: string;
}

const GenerateButton = (input: GenerateButtonProps) => {
  return (
    <Button
      className="m-1"
      size="default"
      color="orange"
      onClick={input.onClick}
      title={input.title}
    >
      {input.boardSize}x{input.boardSize}
    </Button>
  );
};

export default GenerateButton;
