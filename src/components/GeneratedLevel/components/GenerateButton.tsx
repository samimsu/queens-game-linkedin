import { Button } from "@/components/ui/button.tsx";

interface GenerateButtonProps {
  boardSize: number;
  onClick?: () => void;
}

const GenerateButton = (input: GenerateButtonProps) => {
  return (
    <Button className="m-1" variant="outline" size="sm" onClick={input.onClick}>
      {input.boardSize}x{input.boardSize}
    </Button>
  );
};

export default GenerateButton;
