import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Mail } from "lucide-react";
import Required from "@/components/Required";

interface SubmitViaSectionProps {
  via: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SubmitViaSection = ({
  via,
  handleInputChange,
}: SubmitViaSectionProps) => {
  return (
    <div>
      <label>
        Submit Via <Required />
      </label>
      <div className="grid sm:grid-cols-2 gap-2 sm:gap-4 max-w-lg">
        <label className="flex items-center border border-gray-500 rounded-lg p-2 w-56 bg-gray-50 dark:bg-gray-800">
          <input
            type="radio"
            name="submitVia"
            value="email"
            checked={via === "email"}
            onChange={handleInputChange}
            className="h-4 w-4"
          />
          <span className="flex space-x-1 ml-2 items-center">
            <Mail /> <span>Email</span>
          </span>
        </label>
        <label className="flex items-center border border-gray-500 rounded-lg p-2 w-56 bg-gray-50 dark:bg-gray-800">
          <input
            type="radio"
            name="submitVia"
            value="github"
            checked={via === "github"}
            onChange={handleInputChange}
            className="h-4 w-4"
          />
          <span className="flex space-x-1 ml-2 items-center">
            <GitHubLogoIcon className="w-6 h-6" />
            <span>GitHub</span>
          </span>
        </label>
      </div>
    </div>
  );
};

export default SubmitViaSection;
