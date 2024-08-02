import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import { ShoppingBag } from "lucide-react";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* MOBILE */}
      <div className="h-full flex justify-between items-center md:hidden">
        <Link href="/" className="flex items-center gap-2">
          <ShoppingBag color="#ffedb5" strokeWidth={2} />
          <div className="text-2xl font-medium tracking-wide">MOOD</div>
        </Link>
        <Menu />
      </div>

      {/* BIGGER SCREENS */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center justfy-center gap-3 ">
            <ShoppingBag color="#ffedb5" strokeWidth={2} className="" />
            <div className="text-2xl font-medium tracking-wide">MOOD</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href="/">Homepage</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/deals">Deals</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
