"use client";
import React from "react";
import Navbar from "../Sub-Components/Navbar";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <section className={`${pathname === "/" ? "" : "mainBgColor"}`}>
      <div className="wrapper py-[3rem] lg:px-[5rem] flex-1">
        <Navbar />   {/* ✅ removed pathname={pathname} */}
      </div>
    </section>
  );
};

export default Header;
