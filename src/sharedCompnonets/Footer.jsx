import logo from "../assets/footer/footerLogo.png";
import icon1 from "../assets/footer/youtube.png";
import icon2 from "../assets/footer/facebook.png";
import icon3 from "../assets/footer/whatsApp.png";

const Footer = () => {
  const icons = [icon1, icon2, icon3];

  return (
    <div className="bg-[#0A0E31] px-5 lg:px-16 pt-7">
      <footer className="px-4 divide-y  text-white">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3 ">
            <a rel="noopener noreferrer" href="#" className="">
              <div className=" -mt-5">
                <img  src={logo} alt="" />
              </div>
              <span className="self-center text-xs !text-slate-50 font-semibold opacity-70">
                Jl. Lebak Bulus I Kav. 29 Cilandak <br />
                Jakarta Selatan, DKI Jakarta, Indonesia 12340
              </span>
            </a>
            <div className="flex gap-4 items-center py-6">
              {icons.length > 0 &&
                icons.map((icon) => (
                  <div key={icon}>
                    <img src={icon} alt="" />
                  </div>
                ))}
            </div>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-3">
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase text-white">
                Company Info
              </h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Features
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Integrations
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Pricing
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase text-white">Cabang</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Privacy
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="uppercase text-white">Kontak Kami</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    +626564465455
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    info@klinik24.com
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Telp: +5646544654
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center text-gray-600">
           Copyright © Klinik24 2022
        </div>
      </footer>
    </div>
  );
};

export default Footer;
