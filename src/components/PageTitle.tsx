import { Helmet } from "react-helmet-async";

interface PageTitleProps {
  title?: string;
  suffix?: string;
}

const PageTitle = ({ title, suffix = "Queens" }: PageTitleProps) => {
  const fullTitle = title ? `${title} - ${suffix}` : suffix;

  return (
    <Helmet>
      <title>{fullTitle}</title>
    </Helmet>
  );
};

export default PageTitle;
