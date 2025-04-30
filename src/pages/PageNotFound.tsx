import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import RootLayout from "@/layouts/RootLayout";
import PageTitle from "@/components/PageTitle";
import { Button } from "@/components/ui/button";

const PageNotFound = () => {
  const { t } = useTranslation();
  return (
    <RootLayout>
      <PageTitle title="Page Not Found" />
      <div className="flex flex-col items-center justify-center pt-24 text-center mx-2">
        <h1 className="text-4xl font-bold text-primary">
          {t("404_PAGE_NOT_FOUND")}
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          {t("PAGE_YOU_ARE_LOOKING_FOR_DOESNT_EXIST")}
        </p>
        <Link to="/" className="mt-6">
          <Button className="hover:bg-primary hover:opacity-90">
            {t("GO_HOME")}
          </Button>
        </Link>
      </div>
    </RootLayout>
  );
};

export default PageNotFound;
