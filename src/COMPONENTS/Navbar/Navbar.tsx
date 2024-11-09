import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FaHeartCirclePlus } from "react-icons/fa6";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import NavLogo from "../../ASSETS/logo white.png";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar1() {
  return (
    <Disclosure as="nav" className="bg-red-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch lg:justify-start">
            <div className="flex flex-shrink-0 items-center w-[170px] h-[50px]">
              <img
                src={NavLogo}
                alt="Company Logo"
                className="w-full h-full object-cover mt-4"
              />
            </div>
            <div className="hidden lg:ml-6 lg:block pt-2">
              <ul className="flex justify-center items-center gap-3 text-white font-normal text-sm py-2">
                <Link to={"/"}>
                  <p>HOME</p>
                </Link>
                <Link to={"/AboutUs"}>
                  <p>ABOUT</p>
                </Link>
                <Link to={"/Shop"}>
                  <p>SHOP</p>
                </Link>
                <Link to={"/Review"}>
                  <p>REVIEW</p>
                </Link>
                <Link to={"/Contact"}>
                  <p>CONTACT</p>
                </Link>
              </ul>
            </div>
          </div>

          <div className="absolute gap-3 md:gap-14 inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 lg:pr-0">
            <div>
              <Link to={"/Login"}>
                <button
                  type="button"
                  className="rounded-md text-xs md:text-lg font-serif bg-white p-1 text-red-800 w-14 md:w-[150px] md:h-[40px] h-[30px] w-[90px]"
                >
                  Login/Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="lg:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <ul className="flex flex-col px-2.5 justify-start items-start gap-3 text-white font-normal text-sm py-2">
            <Link to={"/"}>
              <p>HOME</p>
            </Link>
            <Link to={"/AboutUs"}>
              <p>ABOUT</p>
            </Link>
            <Link to={"/Shop"}>
              <p>SHOP</p>
            </Link>
            <Link to={"/Review"}>
              <p>REVIEW</p>
            </Link>
            <Link to={"/Contact"}>
              <p>CONTACT</p>
            </Link>
          </ul>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
