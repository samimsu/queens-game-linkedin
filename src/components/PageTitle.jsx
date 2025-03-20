import { Helmet } from "react-helmet-async";

const PageTitle = ({ title, suffix = "Queens" }) => {
  const fullTitle = title ? `${title} - ${suffix}` : suffix;

  return (
    <Helmet>
      <title>{fullTitle}</title>
    </Helmet>
  );
};

export default PageTitle;
