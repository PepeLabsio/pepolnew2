import { cn } from "@/lib/utils";
import { montserrat, shrikhand } from "@/public/fonts";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HowToBuy = () => {
  const howtobuy = [
    {
      id: 1,
      name: "Create a wallet",
      description:
        "Download Phantom wallet from the app store or google play store for free. Desktop users, download the google chrome extension by going to phantom.app",
      button: (
        <Link
          target="_blank"
          href={"https://phantom.app/"}
          className={cn(
            "px-6 py-3 flex items-center gap-2 rounded-lg border border-white-100",
            "ty-title text-white-100 hover:bg-white-100 hover:text-[#17004F] ease-out duration-300"
          )}
        >
          <Image
            src={"/assets/how-to-buy/phantom-wallet.png"}
            alt={"Phantom wallet"}
            height={24}
            width={24}
            unoptimized
          />
          <h1 className={cn(shrikhand.className)}>Download Wallet</h1>
        </Link>
      ),
    },
    {
      id: 2,
      name: "Get some sol",
      description:
        "Have sol in your wallet to switch to $PEPOL. If you don’t have any SOL , you can buy directly on Phantom wallet, transfer from another wallet, or buy on another exchange and send it to your wallet.",
      button: (
        <div className="flex flex-wrap items-center gap-2">
          <div
            className={cn(
              "p-3 flex items-center gap-2 rounded-lg border border-white-100",
              "ty-title text-white-100 hover:bg-white-100 hover:text-[#17004F] ease-out duration-300"
            )}
          >
            <Image
              src={"/assets/how-to-buy/binance.png"}
              alt={"binance"}
              height={24}
              width={24}
              unoptimized
            />
          </div>
          <div
            className={cn(
              "p-3 flex items-center gap-2 rounded-lg border border-white-100 self-stretch",
              "ty-title text-white-100 hover:bg-white-100 hover:text-[#17004F] ease-out duration-300"
            )}
          >
            <Image
              src={"/assets/how-to-buy/bybit.png"}
              alt={"bybit"}
              height={24}
              width={50}
              unoptimized
            />
          </div>
          <div
            className={cn(
              "p-3 flex items-center gap-2 rounded-lg border border-white-100 self-stretch",
              "ty-title text-white-100 hover:bg-white-100 hover:text-[#17004F] ease-out duration-300"
            )}
          >
            <Image
              src={"/assets/how-to-buy/okx.png"}
              alt={"okx"}
              height={24}
              width={50}
              unoptimized
            />
          </div>
        </div>
      ),
    },
    {
      id: 3,
      name: "buy $PEPOL",
      description: "go to jupiter and switch SOL for $PEPOL.",
      button: (
        <a
          href="https://jup.ag/swap/So11111111111111111111111111111111111111112-3rBPDNjxkPbtvDAU57UpQe2eavbWKUbxDZjZDkcLEa4r"
          className={cn(
            "px-6 py-3 flex items-center gap-2 rounded-lg border border-white-100",
            "ty-title text-white-100 hover:bg-white-100 hover:text-[#17004F] ease-out duration-300"
          )}
        >
          <Image
            src={"/assets/how-to-buy/jupiter.png"}
            alt={"jupiter"}
            height={24}
            width={24}
            unoptimized
          />
          <h1 className={cn(shrikhand.className)}>Buy now</h1>
        </a>
      ),
    },
  ];

  return (
    <div
      id="how-to-buy-section"
      className="flex justify-center items-center py-8"
    >
      <div className="flex flex-col justify-center items-center gap-8 max-w-[817px] xl:px-0 px-4">
        <h1
          className={cn(
            shrikhand.className,
            "ty-h1 text-white-100 text-center"
          )}
        >
          how to buy
        </h1>
        {howtobuy.map((data, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-4 items-start justify-start py-4 px-8 rounded-lg bg-[#17004F] max-w-[817px] w-full"
            >
              <h1 className={cn(shrikhand.className, "ty-h2 text-[#F0F6FE]")}>
                0{data.id}.
              </h1>
              <h1 className={cn(shrikhand.className, "ty-h6 text-[#F0F6FE]")}>
                {data.name}
              </h1>

              <p
                className={cn(
                  montserrat.className,
                  "ty-subheading text-white-100"
                )}
              >
                {data.description}
              </p>

              {data.button}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowToBuy;
