import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { shrikhand } from "@/public/fonts";

const Navbar = () => {
  const navigation = [
    {
      name: "home",
      link: "/#",
    },
    {
      name: "how to buy",
      link: "/#how-to-buy-section",
    },
  ];
  return (
    <div className="sticky top-0 flex justify-center items-center py-8 z-[99] bg-[#3f267a]">
      <div className="flex items-center justify-between grow lg:justify-center gap-16 xl:px-0 px-4">
        <div className="flex items-center gap-2">
          <Image
            src={"/assets/hero-section/pepol-hero.png"}
            alt={"pepol"}
            height={32}
            width={32}
          />
          <h1 className={cn(shrikhand.className, "ty-title text-white-100")}>
            $PEPOL
          </h1>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {navigation.map((data, index) => {
            return (
              <a
                href={data.link}
                key={index}
                className={cn(
                  "hidden lg:flex p-2 ty-title text-white-100 hover:opacity-75 duration-300 ease-out",
                  shrikhand.className
                )}
              >
                {data.name}
              </a>
            );
          })}
          <a
            target="_blank"
            href="https://jup.ag/swap/So11111111111111111111111111111111111111112-3rBPDNjxkPbtvDAU57UpQe2eavbWKUbxDZjZDkcLEa4r"
            className={cn(
              "px-4 py-2 rounded-[32px] border border-white-100 text-white-100 ty-title hover:bg-white-100 hover:text-[#17004F] ease-out duration-300",
              shrikhand.className
            )}
          >
            buy now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
