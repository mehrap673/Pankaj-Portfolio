import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export const TestimonialsSection = (): JSX.Element => {
  const testimonialData = {
    user: {
      name: "Demetria Gills",
      handle: "@Demetria",
      avatar: "/figmaAssets/image-1.png",
    },
    content:
      "Using @GlobalITMarket I was able to connect with companies that could help with my software needs.",
  };

  return (
    <section className="relative w-full">
      <div className="w-full h-[268px] bg-[#000002]" />

      <img
        className="absolute top-[27px] left-1/2 transform -translate-x-1/2 w-[335px] h-[332px]"
        alt="Group"
        src="/figmaAssets/group-336.png"
      />

      <div className="flex flex-col items-center gap-6 absolute top-[116px] left-1/2 transform -translate-x-1/2 w-[318px]">
        <h2 className="text-[32px] font-semibold text-[#eaeaea] text-center tracking-[-0.32px] [font-family:'Manrope',Helvetica]">
          Why GlobalITMarket?
        </h2>

        <p className="text-[13px] font-medium text-[#ffffffb2] text-center [font-family:'Manrope',Helvetica]">
          Here&apos;s what people are saying about us
        </p>
      </div>

      <Card className="absolute top-[298px] left-1/2 transform -translate-x-1/2 w-[342px] bg-[#eaeaea0d] border-none rounded-[20px] backdrop-blur-[27.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(27.5px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[20px] before:[background:linear-gradient(156deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
        <CardContent className="p-6 py-11">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Avatar className="w-11 h-11">
                <AvatarImage
                  src={testimonialData.user.avatar}
                  alt={testimonialData.user.name}
                  className="object-cover"
                />
              </Avatar>

              <div className="flex flex-col">
                <div className="text-base font-medium text-[#f4f0ff] tracking-[0.16px] leading-6 [font-family:'Manrope',Helvetica]">
                  {testimonialData.user.name}
                </div>
                <div className="text-sm font-normal text-[#efedfd99] tracking-[0.14px] leading-5 [font-family:'Manrope',Helvetica]">
                  {testimonialData.user.handle}
                </div>
              </div>
            </div>

            <div className="text-[13px] font-normal tracking-[-0.13px] leading-[13px] [font-family:'Manrope',Helvetica]">
              <span className="text-[#efedfdb2] tracking-[-0.02px] leading-[0.1px]">
                Using{" "}
              </span>
              <span className="text-[#1da1f2] tracking-[-0.02px] leading-[19.5px]">
                @GlobalITMarket{" "}
              </span>
              <span className="text-[#efedfdb2] tracking-[-0.02px] leading-[0.1px]">
                I was able to connect with companies that could help with my
                software needs.
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
