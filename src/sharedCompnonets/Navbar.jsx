import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";
import { RiMenu3Line } from "react-icons/ri";
import Button from "./Button";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openMenu]);

  const navItems = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "Doctors", href: "/" },
    { id: 3, label: "About", href: "/" },
  ];

    useGSAP(()=>{
      gsap.from(".navLinks",{
        duration: 0.9,
        opacity: 0,
        y: -20,
        stagger: 0.1,
        ease: "back.in"
      })
      gsap.from(".btn",{
        duration: 0.9,
        opacity: 0,
        x: 30,
        stagger: 0.1,
        ease: "back.in"
      })
    })

  return (
    <header className="container bg-transparent pb-8 !pt-5 md:pt-8  flex justify-between items-center md:max-w-5xl w-full ">
      <div className="flex items-center justify-between md:max-w-md w-full relative">
        {/* logo */}
        <img src={logo} className="navLinks max-w-28 lg:max-w-48" alt="logo" />

        <div
          className={`absolute z-50 -top-20 mt-7  ${
            openMenu ? "-right-[250px] h-[110vh] bg-white w-[230px]" : "-right-[500px]"
          } md:static flex flex-col md:flex-row items-center gap-10 bg-light md:bg-transparent px-10 pt-16 md:p-0 h-screen md:h-fit duration-300 `}
        >
          <nav className=" flex flex-col md:flex-row items-center gap-6 relative">
            {navItems?.map((item) => (
              <Link
                className="navLinks hover:text-primary"
                href={item?.href || "/"}
                key={item?.id}
              >
                {item?.label}
              </Link>
            ))}
            {/* cross btn */}
            <button
              onClick={() => setOpenMenu(false)}
              className="absolute -top-12 -left-20 border p-2 rounded-full bg-primary text-white text-2xl md:hidden"
            >
              <FaXmark />
            </button>
          </nav>
        </div>
      </div>
      <div className="btn mt-7 ">
        <Button
        text={"Register/Login"}
        cls="pr-7 md:pr-5 "
        />
      </div>

      {/* menu btn */}
      <button onClick={() => setOpenMenu(true)} className="text-2xl md:hidden  ml-5">
        <RiMenu3Line />
      </button>

      {/* backdrop */}
      {openMenu && (
        <div
          onClick={() => setOpenMenu(false)}
          className="fixed inset-0 w-full z-40 md:hidden"
        ></div>
      )}
    </header>
  );
};

export default Navbar;
