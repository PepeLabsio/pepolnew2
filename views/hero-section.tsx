import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { montserrat, shrikhand } from "@/public/fonts";
import TwitterIcon from "@/icon/twitter";
import TelegramIcon from "@/icon/telegram";
import DexscreenerIcon from "@/icon/dexscreener";

const HeroSection = () => {
  const socmed = [
    {
      name: "dexscreener",
      icon: <DexscreenerIcon />,
      link: "https://dexscreener.com/solana/6pmdqqukghxfgfxhsvhfexnc2juy1hvmucbej9umdzxj",
    },
    {
      name: "twitter",
      icon: <TwitterIcon />,
      link: "https://x.com/PEPOLSOLANA",
    },
    {
      name: "telegram",
      icon: <TelegramIcon />,
      link: "https://t.me/pepelabsio",
    },
  ];
  return (
    <div className="flex justify-center items-center min-h-[100dvh] py-8 relative">
      <Image
        src={"/assets/hero-section/bg-left.png"}
        alt={"bg-left"}
        height={1000}
        width={1000}
        className="w-full absolute top-0 left-0 max-w-[200px] lg:max-w-[500px] xl:max-w-[800px] -z-[1]"
      />
      <Image
        src={"/assets/hero-section/bg-left.png"}
        alt={"bg-left"}
        height={1000}
        width={1000}
        className="w-full absolute bottom-0 lg:top-0 right-0 max-w-[200px] lg:max-w-[500px] xl:max-w-[800px] -z-[1] transform scale-x-[-1]"
      />
      <div className="flex flex-col gap-8 items-center justify-center max-w-[758px] xl:px-0 px-4">
        <Image
          src={"/assets/hero-section/pepol-hero.png"}
          alt={"pepol"}
          height={400}
          width={400}
          className="w-full max-w-[400px]"
          unoptimized
        />

        <div className="flex flex-col gap-4 items-center justify-center text-center">
          <h1 className={cn("ty-h2 text-white-100", shrikhand.className)}>
            $PEPOL
          </h1>

          <p
            className={cn(
              montserrat.className,
              "text-white-100 ty-descriptions text-center"
            )}
          >
            PEPOL ON SOL
          </p>

          <span
            className={cn(
              montserrat.className,
              "text-white-100 ty-descriptions text-center"
            )}
          >
            CA: 3rBPDNjxkPbtvDAU57UpQe2eavbWKUbxDZjZDkcLEa4r
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {socmed.map((data, index) => {
            return (
              <a
                target="_blank"
                href={data.link}
                key={index}
                className="hover:opacity-75 duration-300 ease-out"
              >
                {data.icon}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
