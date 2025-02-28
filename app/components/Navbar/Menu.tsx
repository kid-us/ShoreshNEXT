import { assets, navs } from "../../services/nav";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";

interface Props {
  menuAnimation: string;
  onClose: () => void;
}

const Menu = ({ onClose, menuAnimation }: Props) => {
  return (
    <>
      {/* Overlay */}
      <div className="bg-neutral-700/50 fixed z-10 top-0 left-0 w-full h-[100dvh]"></div>
      <div
        className={`fixed z-50 top-0 left-0 w-[95%] h-screen bg animate__animated ${menuAnimation}`}
      >
        <div className="py-7 px-5">
          <div className="flex justify-between text-xl mb-10 border-b border-gray-600 pb-5">
            <a href="/" className="text-2xl uppercase flex lg:gap-x-5 gap-x-2">
              <Image src={logo} alt="Logo" className="w-13" />

              <div className="leading-6 w-full">
                <p className="items-center flex logo-font logo-font uppercase underline underline-offset-4 decoration-amber-400 decoration-1 text-white">
                  Shoresh Group
                </p>
                <p
                  className={`items-center flex logo-font logo-font uppercase text-xl text-amber-400 justify-center`}
                >
                  Real Estate
                </p>
              </div>
            </a>

            <button
              onClick={onClose}
              className="bi-chevron-left text-2xl text-white"
            ></button>
          </div>

          {/* Links */}
          <div className="space-y-5">
            {assets.map((asset) => (
              <Link
                onClick={onClose}
                key={asset.id}
                className="block py-1 text-lg text-white uppercase"
                href={asset.path}
              >
                <span className={`${asset.icon} me-2 font-light`}></span>
                {asset.name}
              </Link>
            ))}

            {navs.map((n, index) => (
              <Link
                key={n.id || index}
                href={n.path}
                className="block py-1 text-lg text-white uppercase"
              >
                {n.name}
              </Link>
            ))}

            <div>
              <a
                href="/"
                className="flex items-center justify-center font-semibold uppercase transition-all duration-200 shadow-[3px_3px_0px_#000] h-12 px-14 hover:shadow-none rounded bg-white"
              >
                Investor's Login
              </a>
            </div>
          </div>

          <div className="absolute bottom-10 w-full">
            <p className="text-sm text-amber-300">
              &copy;2025 SHORESH GROUP. All right reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
