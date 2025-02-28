import logo from "@/public/images/logo.png";
import Image from "next/image";
import { footer } from "../services/footer";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black/90">
      <div className="container mx-auto px-5 lg:px-5">
        <div className="lg:flex justify-between pt-14 pb-5">
          <div className="flex items-center">
            <div>
              <div className="flex gap-x-3">
                <Image src={logo} alt="Logo" className="w-16 h-16" />

                <div className="leading-6">
                  <p className="items-center flex logo-font logo-font uppercase underline underline-offset-4 decoration-amber-400 decoration-1 text-2xl text-white">
                    Shoresh Group
                  </p>
                  <p
                    className={`items-center flex logo-font logo-font uppercase text-xl text-amber-400 justify-center`}
                  >
                    Real Estate
                  </p>
                </div>
              </div>
              <p className="lg:text-xs text-sm mt-5 text-zinc-300 lg:w-96">
                A family-founded real estate venture focused on generational
                wealth. Investing in distressed homes, multifamily properties,
                and large-scale developments.
              </p>

              <p className="lg:text-xs text-sm mt-2 text-zinc-300 lg:w-96">
                Address : 1230 E.Kiowa Street Colorado Springs, CO 80909
              </p>
              <p className="lg:text-xs text-sm mt-1 text-zinc-300 lg:w-96">
                Office #:(248)-450-4836
              </p>
              <p className="lg:text-xs text-sm mt-1 text-zinc-300 lg:w-96 lg:mb-0 mb-7">
                Email :{" "}
                <a href="mailto:@shoresh-group.com" className="text-blue-500">
                  @shoresh-group.com
                </a>
              </p>
              <p className="lg:block hidden text-xs text-btn mt-6">
                &copy;2025 SHORESH GROUP. All right reserved.
              </p>
            </div>
          </div>

          {/* Footer links */}
          <div className="lg:mt-10">
            <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-10 gap-x-2 gap-y-6">
              {footer.map((nav) => (
                <div
                  key={nav.id} // Ensure uniqueness
                >
                  <Link
                    href={nav.path}
                    className="lg:mb-0 mb-3 text-gray-300 lg:text-sm hover:text-white transition-colors uppercase group"
                  >
                    {nav.name}
                    <span className="inline-block transition-transform duration-300 group-hover:rotate-45 ms-3">
                      <i className="bi bi-arrow-up-right text-xs"></i>
                    </span>
                  </Link>
                </div>
              ))}
            </div>

            {/* Large Device Social Media */}
            <div className="flex space-x-10 mt-10">
              <Link
                href="/"
                className="text-3xl h-10 text-gray-500 hover:text-btn transition-colors duration-150 bi-facebook"
              ></Link>
              <Link
                href="/"
                className="text-3xl h-10 text-gray-500 hover:text-btn transition-colors duration-150 bi-instagram"
              ></Link>
              <Link
                href="/"
                className="text-3xl h-10 text-gray-500 hover:text-btn transition-colors duration-150 bi-linkedin"
              ></Link>
              <Link
                href="/"
                className="text-3xl h-10 text-gray-500 hover:text-btn transition-colors duration-150 bi-twitter-x"
              ></Link>
            </div>
          </div>

          <p className="lg:hidden block text-xs text-btn mt-8 pb-8">
            &copy;2025 SHORESH GROUP. All right reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
