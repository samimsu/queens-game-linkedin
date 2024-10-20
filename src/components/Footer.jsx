import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mx-auto px-2 flex divide-x divide-slate-700 space-x-3">
      <div>
        Created by{" "}
        <a
          href="https://github.com/samimsu"
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
  );
};

export default Footer;
