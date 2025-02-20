import { Link } from "react-router-dom";
import GithubStarButton from "./GithubStarButton";
import PatreonButton from "./PatreonButton";

const Footer = () => {
  return (
    <div className="px-2 space-y-3">
      <div className="mx-auto w-fit flex items-center divide-x divide-slate-700 space-x-3">
        <div>
          Created by{" "}
          <a
            href="https://samimsu.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-medium"
          >
            Sami
          </a>
        </div>

        <Link to="/level-builder" className="pl-3 hover:underline">
          Level Builder
        </Link>
      </div>

      <div className="flex justify-center items-center space-x-3 mx-auto w-fit">
        <div className="h-7">
          <GithubStarButton />
        </div>
        <div>
          <PatreonButton />
        </div>
      </div>
    </div>
  );
};

export default Footer;
