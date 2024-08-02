"use client";

import Image from "next/image";
import Link from "next/link";
import { Bell, ShoppingCart, User } from "lucide-react";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import CartModal from "./CartModal";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const pathName = usePathname();

  // const wixClient = useWixClient();
  // const isLoggedIn = wixClient.auth.loggedIn();

  // TEMPORARY
  const isLoggedIn = false;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setIsProfileOpen((prev) => !prev);
    }
  };

  const handleLogout = async () => {
    setIsLoading(true);
    setIsLoading(false);
    setIsProfileOpen(false);
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <User className="cursor-pointer" onClick={handleProfile} />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href="/profile">Profile</Link>
          <div className="mt-2 cursor-pointer" onClick={handleLogout}>
            {isLoading ? "Logging out" : "Logout"}
          </div>
        </div>
      )}
      <div className="relative cursor-pointer">
        <Bell className="cursor-pointer" />
        <div className="absolute -top-4 -right-4 w-5 h-5 bg-red-500 rounded-full text-white text-sm flex items-center justify-center">
          1
        </div>
      </div>
      <div className="relative cursor-pointer">
        <ShoppingCart onClick={() => setIsCartOpen((prev) => !prev)} />
        <div className="absolute -top-4 -right-4 w-5 h-5 bg-red-500 rounded-full text-white text-sm flex items-center justify-center">
          1
        </div>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
};

export default NavIcons;
