import join from "@/public/images/join.jpg";
import LinkButton from "../components/Button/LinkButton";
import Image from "next/image";
import Mission from "./Mission";
import AboutHero from "./AboutHero";
import Navbar from "../Navbar";

export const metadata = {
  title: "About",
};

const AboutUsPage = () => {
  return (
    <>
      <Navbar bg />
      <AboutHero />

      <Mission />

      <div className="container mx-auto px-5 my-10 lg:w-[70%]">
        <div className="grid lg:grid-cols-2 gap-x-10 gap-y-5">
          <div className="flex flex-col justify-center">
            <p className="lg:text-xl mb-10 lg:font-semibold text-gray-700">
              Want to be a part of something bigger? Get in touch today and
              discover how you can join our growing legacy.
            </p>
            <LinkButton name="Join Our Journey" path="/contact" />
          </div>
          <div>
            <Image
              src={join}
              alt="Join Our Journey"
              className="w-full lg:h-96 lg:object-cover lg:object-right rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
