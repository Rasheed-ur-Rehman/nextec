"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  NavigationData,
  NavigationDataType,
} from "../Utils/NavigationDataAndTypes";
import { AlignJustify } from "lucide-react";

import Link from "next/link";
import { useState } from "react";

const SideBar = ({ pathname }: { pathname: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="hidden hover:cursor-pointer">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <AlignJustify
            size={25}
            className="lg:hidden hover:cursor-pointer active:scale-95"
          />
        </SheetTrigger>
        <SheetContent side={"right"}>
          <SheetHeader className="mt-6">
            {NavigationData.map((items: NavigationDataType, index: number) => (
              <SheetTitle
                key={index}
                className="hover:opacity-50 tracking-[2px]  mt-6 text-xl text-center font-medium hover:scale-125 duration-300"
              >
                <SheetClose>
                  <Link
                    href={items.url}
                    className="mt-4"
                    onClick={() => setOpen(false)}
                  >
                    {items.label}
                  </Link>
                </SheetClose>
              </SheetTitle>
            ))}
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SideBar;
