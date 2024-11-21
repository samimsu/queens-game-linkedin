import React from "react";

const GithubStarButton = ({ variant = "" }) => {
  const user = "samimsu";
  const repo = "queens-game-linkedin";

  if (variant === "small") {
    return (
      <iframe
        src={`https://ghbtns.com/github-btn.html?user=${user}&repo=${repo}&type=star&count=true`}
        width="71"
        height="20"
        title="GitHub"
      ></iframe>
    );
  }

  return (
    <iframe
      src={`https://ghbtns.com/github-btn.html?user=${user}&repo=${repo}&type=star&count=true&size=large`}
      width="109"
      height="30"
      title="GitHub"
    ></iframe>
  );
};

export default GithubStarButton;
