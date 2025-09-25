import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const navigationLinks = [
  {
    title: "Browse all Partners",
    items: ["FAQs", "Find my match"],
  },
  {
    title: "Become a Partner",
    items: ["Write a Review"],
  },
  {
    title: "Facebook",
    items: ["Instagram", "LinkedIn"],
  },
];

const footerLinks = [
  { text: "Privacy Policy", className: "left-0" },
  { text: "Terms of Conditions", className: "left-[154px]" },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-[#0d0d0d] relative overflow-hidden">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt="Group"
        src="/figmaAssets/group-38620-1.png"
      />

      <div className="flex flex-col w-full items-start gap-14 px-9 py-14 relative z-10">
        <div className="flex flex-col items-start gap-6 w-full">
          <img
            className="w-[125.65px] h-12"
            alt="Group"
            src="/figmaAssets/group-1.png"
          />

          <div className="[font-family:'Manrope',Helvetica] font-normal text-[#efedfdb2] text-[13px] tracking-[0] leading-[19.5px]">
            Sponsored by Project Advisory Solutions, we are a global hub for
            discovering trusted IT and software partners.
            <br />
            <br /> We connect companies to opportunities in high-value markets,
            helping you cut search time, unlock new solutions, and grow with
            confidence.
          </div>

          <Button
            variant="ghost"
            className="h-auto p-0 text-[#1da1f2] hover:bg-transparent"
          >
            <div className="inline-flex h-[19px] items-center gap-1">
              <div className="[font-family:'Manrope',Helvetica] font-semibold text-sm text-center tracking-[0.14px] leading-[22px] whitespace-nowrap">
                Learn more about us
              </div>
              <ArrowRightIcon className="w-5 h-5" />
            </div>
          </Button>

          <Button
            variant="ghost"
            className="h-auto p-0 text-[#1da1f2] hover:bg-transparent"
          >
            <div className="inline-flex h-[19px] items-center gap-1">
              <div className="[font-family:'Manrope',Helvetica] font-semibold text-sm text-center tracking-[0.14px] leading-[22px] whitespace-nowrap">
                About Project Advisory Solutions
              </div>
              <ArrowRightIcon className="w-5 h-5" />
            </div>
          </Button>
        </div>

        <div className="flex flex-wrap items-start justify-between gap-8 w-full">
          {navigationLinks.map((section, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="[font-family:'Manrope',Helvetica] font-semibold text-[#1da1f2] text-sm tracking-[0.14px] leading-8">
                {section.title}
              </div>
              {section.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="[font-family:'Manrope',Helvetica] font-semibold text-[#1da1f2] text-sm tracking-[0.14px] leading-8"
                >
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="inline-flex flex-col items-start gap-6 w-full">
          <Separator className="w-[318px] h-px bg-white/20" />

          <div className="w-80 h-16">
            <div className="flex w-[318px] items-center justify-around gap-[512px]">
              <div className="w-[284px] h-5 relative">
                {footerLinks.map((link, index) => (
                  <div
                    key={index}
                    className={`absolute top-0 ${link.className} h-5 flex items-center justify-center [font-family:'Inter',Helvetica] font-normal text-[#efedfd99] text-[13px] tracking-[0.13px] leading-5 whitespace-nowrap`}
                  >
                    {link.text}
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute top-11 left-0 h-5 flex items-center justify-center [font-family:'Inter',Helvetica] font-normal text-[#efedfd99] text-[13px] tracking-[0.13px] leading-5 whitespace-nowrap">
              Copyrights GlobalITMarketplace 2025
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
