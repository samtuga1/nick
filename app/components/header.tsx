/* eslint-disable react/no-unescaped-entities */
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NextPage } from "next";
import Link from "next/link";

// interface Props {}

const Header: NextPage = ({}) => {
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const onScroll = () => {
  //     setIsScrolled(window.scrollY > 10);
  //   };
  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  const pathname = usePathname();

  const navItems = [
    { name: "About", href: "/about" },
    { name: "My Works", href: "/my-works" },
    {
      name: "Lets talk",
      href: "mailto:nicholaskofiosei@gmail.com",
      external: true,
    },
  ];

  return (
    <header
      className={`w-full fixed transition-all flex items-center justify-between flex-row px-5 md:px-25 lg:px-70 z-50 ${
        false ? "blur-effect-theme" : "bg-[color:var(--color-scaffold-color)]"
      }`}
    >
      <Link href="/about" className="text-[2rem] cursor-pointer">
        Osei
      </Link>
      <div className="flex gap-3 md:gap-5 text-[16px] md:text-[15px] lg:text-[18px]">
        {navItems.map((item) =>
          item.external ? (
            <a
              key={item.name}
              href={item.href}
              className="transition-colors duration-300"
            >
              {item.name}
            </a>
          ) : (
            <Link
              key={item.name}
              href={item.href}
              className={`transition-colors duration-300 ${
                pathname === item.href
                  ? "text-[color:var(--color-primary-color)]"
                  : ""
              }`}
            >
              {item.name}
            </Link>
          )
        )}
      </div>
    </header>
  );
};

export default Header;
