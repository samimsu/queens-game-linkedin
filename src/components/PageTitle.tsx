// React 19 natively supports document metadata
// The <title> tag will be automatically hoisted to <head>
interface PageTitleProps {
  title?: string;
  suffix?: string;
}

const PageTitle = ({ title, suffix = "Queens" }: PageTitleProps) => {
  const fullTitle = title ? `${title} - ${suffix}` : suffix;

  return <title>{fullTitle}</title>;
};

export default PageTitle;
