import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/admybrandLogo.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  return (
    <header className="backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Supercharge your marketing efforts with intelligent automation and real-time insights.
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="AdmyBrand Logo" className="mt-2 w-40 md:w-48 lg:w-56 h-auto" priority />
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              {["About", "Features", "Customers", "Updates", "Help"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="relative group transition-all duration-300 ease-in-out font-medium"
                >
                  <span className="group-hover:text-indigo-600 group-hover:font-semibold transition-colors duration-300">
                    {item}
                  </span>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight hover:bg-indigo-600 transition-colors duration-300">
                Get for free
              </button>
            </nav>

          </div>
        </div>
      </div>
    </header>
  );
};
