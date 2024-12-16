import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { shrikhand } from "@/public/fonts";

const Roadmap = () => {
  return (
    <div className="flex justify-center items-center py-6 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-center max-w-[904.52px]">
        <Image
          src={"/assets/roadmap/roadmap.png"}
          alt={"roadmap"}
          height={481.14}
          width={479.52}
          className="w-full max-w-[479.52px]"
          unoptimized
        />

        <div className="flex flex-col items-center lg:items-start gap-4 w-full">
          <h1 className={cn("ty-h1 text-white-100", shrikhand.className)}>
            roadmap
          </h1>
          <div className="min-w-[361px] bg-[#17004F] p-4 rounded-lg">
            <h1 className={cn(shrikhand.className, "text-white-100 ty-h5")}>
              Phase 1: Meme
              <br />
              Phase 2: Vibe and HODL
              <br />
              Phase 3: Meme Takeover
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
