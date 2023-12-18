"use client";

import { Menu } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";

const font = Poppins({
  weight: "600",
  subsets: ["latin"],
})

export const Navbar = () => {
  return (
    <div className="fixed w-full z-50 flex justify-between items-center py-2 border-b border-primary/10 bg-secondary">
      <div className="flex items-center">
        <Menu className="md:hidden" />
        <Link href="/">
          <h1 className="hidden md:block text-xl md:text-3xl font-bold text-primary">
            Heading here
          </h1>
        </Link>
      </div>
    </div>
  )
};
