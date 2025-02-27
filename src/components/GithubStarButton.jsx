import React from "react";
import GitHubButton from "react-github-btn";
import { queensGameRepo } from "@/data/links";

const GithubStarButton = ({ variant = "" }) => {
  const user = "samimsu";
  const repo = "queens-game-linkedin";

  return (
    <GitHubButton
      href={queensGameRepo}
      data-color-scheme="no-preference: light; light: light; dark: dark;"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star samimsu/queens-game-linkedin on GitHub"
    >
      Star
    </GitHubButton>
  );
};

export default GithubStarButton;
