import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <span className="flex items-center">
      <Image
        src="/logo-mood.png"
        alt="logo"
        width={25}
        height={25}
        className="shadow-md transform translate-y-[-2px]"
      />
      <div className="text-2xl font-medium tracking-wide">MOOD</div>
    </span>
  );
};

export default Logo;
