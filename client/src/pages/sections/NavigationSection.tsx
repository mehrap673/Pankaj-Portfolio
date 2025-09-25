import { ArrowRightIcon, CheckIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const NavigationSection = (): JSX.Element => {
  const features = [
    "Side-by-side comparison tools",
    "Visualised insights",
    "Downloadable comparison lists",
    "Live-consultation calls",
  ];

  return (
    <div className="flex flex-col w-full max-w-[342px] items-center gap-[38px] relative">
      <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
        {features.map((feature, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-2 relative flex-[0_0_auto]"
          >
            <CheckIcon className="relative w-5 h-5 text-white" />
            <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#d6d6d6] text-base tracking-[0] leading-[25px] whitespace-nowrap">
              {feature}
            </div>
          </div>
        ))}
      </div>

      <img
        className="relative self-stretch w-full h-[227px] object-cover"
        alt="Ipad mockup"
        src="/figmaAssets/ipad-mockup-1.png"
      />

      <Card className="relative w-80 h-[281px] bg-[#ffffff0d] rounded-3xl border-[none] shadow-[0px_4px_24px_#00000040] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-3xl before:[background:linear-gradient(142deg,rgba(64,64,64,1)_15%,rgba(16,16,16,0)_63%,rgba(64,64,64,0.25)_98%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
        <CardContent className="flex flex-col items-center justify-center gap-6 p-6 h-full">
          <img
            className="relative w-[65px] h-[65px]"
            alt="Frame"
            src="/figmaAssets/frame-4275.svg"
          />

          <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Manrope',Helvetica] font-bold text-white text-xl text-center tracking-[0] leading-[normal]">
                One-one-one Consultation
              </div>

              <div className="relative w-[214px] [font-family:'Manrope',Helvetica] font-normal text-[#d6d6d6] text-xs text-center tracking-[0] leading-[18px]">
                Speak to one of our experts and let them help you make the right
                decision
              </div>
            </div>

            <div className="inline-flex items-end gap-2 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#19a6ff] text-base text-center tracking-[0] leading-[25px] whitespace-nowrap">
                Book a free consultation call
              </div>

              <ArrowRightIcon className="relative w-6 h-6 text-[#19a6ff]" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="flex flex-col w-80 items-center justify-center gap-6 px-6 py-8 relative flex-[0_0_auto] bg-[#ffffff0d] rounded-3xl border-[none] shadow-[0px_4px_24px_#00000040] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-3xl before:[background:linear-gradient(142deg,rgba(64,64,64,1)_15%,rgba(16,16,16,0)_63%,rgba(64,64,64,0.25)_98%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
        <CardContent className="flex flex-col items-center gap-6 p-0 w-full">
          <img
            className="relative w-[65px] h-[65px]"
            alt="Frame"
            src="/figmaAssets/frame-4275-1.svg"
          />

          <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Manrope',Helvetica] font-bold text-white text-xl text-center tracking-[0] leading-[normal]">
                In-depth Comparison Tools
              </div>

              <div className="relative w-[216px] [font-family:'Manrope',Helvetica] font-normal text-[#d6d6d6] text-[15px] text-center tracking-[0] leading-[22px]">
                Narrow down your options. Compare and evaluate features, pricing
                and ratings.
              </div>
            </div>

            <div className="inline-flex items-end gap-2 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#19a6ff] text-base text-center tracking-[0] leading-[25px] whitespace-nowrap">
                Coming Soon
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
