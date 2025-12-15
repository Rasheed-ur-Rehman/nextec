"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { projectImages } from "../Assets";
import {
  NavigationData,
  NavigationDataType,
} from "../Utils/NavigationDataAndTypes";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Close all menus when a link is clicked
  const handleLinkClick = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav className="w-full px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href={"/"} className="flex items-center" onClick={handleLinkClick}>
          <Image
            src={projectImages.Logo3}
            width={120}
            height={100}
            alt="Logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 items-center">
          {NavigationData.map((item: NavigationDataType) => {
            const isActive =
              pathname === item.url ||
              (item.url === "/services" && pathname?.startsWith("/services"));

            return (
              <li key={item.label} className="relative group">
                {/* Main link */}
                <Link
                  href={item.url}
                  className={`px-2 py-1 font-medium text-sm tracking-[2px] transition-colors duration-200 ${
                    isActive ? "text-blue-400" : "text-white"
                  } hover:opacity-80`}
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>

                {/* Dropdown on hover */}
                {item.subMenu && (
                  <ul className="absolute left-0 mt-0.5 hidden group-hover:block z-50 min-w-[220px] rounded-md shadow-lg bg-white">
                    {item.subMenu.map((sub) => (
                      <li
                        key={sub.url}
                        className="border-b last:border-b-0 border-gray-200"
                      >
                        <Link
                          href={sub.url}
                          className={`block px-4 py-3 text-sm hover:bg-gray-100 transition-colors ${
                            pathname === sub.url
                              ? "bg-gray-100 text-blue-500"
                              : "text-gray-900"
                          }`}
                          onClick={handleLinkClick} // Close dropdown after click
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-white">
          {NavigationData.map((item: NavigationDataType) => {
            const isActive =
              pathname === item.url ||
              (item.url === "/services" && pathname?.startsWith("/services"));

            return (
              <div key={item.label} className="flex flex-col">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.url}
                    className={`font-medium text-base ${
                      isActive ? "text-blue-400" : "text-white"
                    }`}
                    onClick={handleLinkClick} // Close mobile nav on click
                  >
                    {item.label}
                  </Link>

                  {item.subMenu && (
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.label ? null : item.label
                        )
                      }
                      className="text-white"
                    >
                      <ChevronDown
                        size={20}
                        className={`transition-transform ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile Dropdown */}
                {item.subMenu && openDropdown === item.label && (
                  <ul className="ml-4 mt-2 flex flex-col gap-2 rounded-md p-2 bg-white">
                    {item.subMenu.map((sub) => (
                      <li key={sub.url}>
                        <Link
                          href={sub.url}
                          className={`block px-2 py-2 text-sm rounded hover:bg-gray-100 transition-colors ${
                            pathname === sub.url
                              ? "bg-gray-100 text-blue-500"
                              : "text-gray-900"
                          }`}
                          onClick={handleLinkClick} // Close after clicking submenu
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
