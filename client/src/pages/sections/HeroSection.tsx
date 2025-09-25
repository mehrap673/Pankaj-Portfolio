import { CheckCircleIcon, SearchIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col items-center gap-[195px] py-8">
      <div className="w-[342px] h-[400px] relative">
        <Card className="w-[342px] bg-[#eaeaea12] rounded-[20px] border-none backdrop-blur-[22.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(22.5px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[20px] before:[background:linear-gradient(142deg,rgba(75,95,162,1)_29%,rgba(16,16,16,0)_74%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none absolute top-0 left-[calc(50.00%_-_171px)]">
          <CardContent className="flex flex-col items-center justify-center gap-1 px-5 py-4">
            <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
              <CheckCircleIcon className="w-4 h-4 text-[#1da1f2]" />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-extrabold text-[#1da1f2] text-[11px] tracking-[0] leading-[20.9px] whitespace-nowrap">
                Our promise
              </div>
            </div>
            <div className="relative self-stretch [font-family:'Manrope',Helvetica] font-medium text-white text-[11px] text-center tracking-[0] leading-[16.5px]">
              We are committed to ensuring that our platform never becomes a
              pay-to-win comparison site
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col w-[342px] items-center gap-5 absolute top-32 left-[calc(50.00%_-_171px)]">
          <div className="relative flex items-center justify-center w-[300px] [font-family:'Manrope',Helvetica] font-medium text-[#ffffffb2] text-xs text-center tracking-[0] leading-[normal]">
            Global IT Marketplace — Smarter SaaS &amp; IT matchmaking that saves
            time, money, and effort.
          </div>
        </div>

        <div className="flex w-[342px] h-14 items-center justify-between p-6 absolute top-[calc(50.00%_+_144px)] left-[calc(50.00%_-_171px)] bg-[#eaeaea0d] rounded-[100px] overflow-hidden backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)]">
          <div className="flex items-center gap-1 relative flex-1 grow mt-[-8.50px] mb-[-8.50px]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#d6d6d6] text-sm tracking-[0] leading-[25px] whitespace-nowrap">
              I&apos;m looking for
            </div>
            <div className="relative w-44 h-[25px] mr-[-1.00px]">
              <div className="absolute w-[85.80%] h-full top-0 left-0 [font-family:'Manrope',Helvetica] font-bold text-[#d6d6d6] text-sm tracking-[0] leading-[25px] whitespace-nowrap">
                Digital transformation
              </div>
            </div>
          </div>
          <SearchIcon className="w-6 h-6 text-[#d6d6d6] mt-[-8.00px] mb-[-8.00px]" />
        </div>
      </div>

      <div className="ml-[-5px] h-9 w-[255px] [font-family:'Manrope',Helvetica] font-medium text-[#d6d6d6] text-[13px] text-center tracking-[0] leading-[normal]">
        Compare partners providing solutions such as
      </div>
    </section>
  );
};
