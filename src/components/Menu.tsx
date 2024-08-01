"use client";

import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <MenuIcon className="cursor-pointer" onClick={() => setOpen(!open)} />

      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-20px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          <Link href="/">Homepage</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/logout">Logout</Link>
          <Link href="/">Cart(1)</Link>
        </div>
      )}
    </>
  );
};

export default Menu;
