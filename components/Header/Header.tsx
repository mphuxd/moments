import React from "react";
import Image from "next/image";

function Header() {
  return (
    <>
      <div className="fixed left-4 top-8 z-50 self-start mix-blend-exclusion md:left-8 2xl:left-20">
        <span className="font-header text-xl tracking-wider text-white">
          moments
        </span>
      </div>
      <div className="fixed right-4 top-8 z-50 self-end mix-blend-exclusion md:right-8 2xl:right-20">
        <Image
          src="/images/icons/menu_slim.svg"
          alt="Menu"
          width={32}
          height={32}
        />
      </div>
    </>
  );
}

export default Header;
