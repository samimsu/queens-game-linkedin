import GitHubButton from "react-github-btn";
import { queensGameRepo } from "@/data/links";
import { useTheme } from "next-themes";

const GithubStarButton = () => {
  const { theme } = useTheme();
  const user = "samimsu";
  const repo = "queens-game-linkedin";

  return (
    <GitHubButton
      href={queensGameRepo}
      data-color-scheme={theme}
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label={`Star ${user}/${repo} on GitHub`}
    >
      Star
    </GitHubButton>
  );
};

export default GithubStarButton;
