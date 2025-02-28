import notFound from "@/public/images/404.gif";

import LinkButton from "./components/Button/LinkButton";
import Navbar from "./Navbar";
import Image from "next/image";

export const metadata = {
  title: "Page Not Found",
};

const PageNotFound = () => {
  return (
    <>
      <Navbar bg />

      <div className="lg:h-[90dvh] h-[100dvh] flex justify-center items-center">
        <div className="lg:mt-0 mt-32">
          <Image
            src={notFound}
            alt="Not Found"
            className="w-96 h-60 object-cover"
          />
          <p className="text-center font-semibold text-2xl">Page Not Found</p>
          <p className="text-center mt-5 text-gray-600">
            The page you were looking for was either removed or doesn&apos;t exist.
          </p>
          <div className="text-center mt-10">
            <LinkButton name="Back Home" path="/" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
