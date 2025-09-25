import { CheckIcon, ZapIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: "/figmaAssets/group-38609.png",
    title: "Personalized Matching",
    description:
      "Get tailored recommendations by company size, industry, and needs.",
  },
  {
    icon: "/figmaAssets/0007.png",
    title: "Quick & Easy",
    description:
      "Complete in 5–7 minutes with our simple, intuitive interface.",
  },
  {
    icon: "/figmaAssets/0010.png",
    title: "Expert Insights",
    description:
      "Receive curated recommendations with detailed comparison reports",
  },
];

const benefits = [
  "Personalized software recommendations",
  "Comparison insights",
  "Option to book free consultation call",
  "Access to exclusive vendor offers",
];

export const ContactSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col gap-[27px] px-4">
      <header className="flex w-full max-w-[342px] mx-auto flex-col items-center gap-6">
        <h2 className="text-center [font-family:'Manrope',Helvetica] font-semibold text-[#eaeaea] text-[32px] tracking-[-0.32px] leading-[normal]">
          Not sure what you&apos;re looking for?
        </h2>

        <p className="text-center [font-family:'Manrope',Helvetica] font-medium text-[#ffffffb2] text-[13px] tracking-[0] leading-[normal]">
          Tell us what you need. We&apos;ll match you with the right software
          and partner - at lightning speed.
        </p>
      </header>

      <Card className="w-full max-w-[342px] mx-auto bg-[#eaeaea0d] rounded-[28px] border-none backdrop-blur-[19px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(19px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[28px] before:[background:linear-gradient(142deg,rgba(75,95,162,1)_29%,rgba(16,16,16,0)_74%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative">
        <CardContent className="flex flex-col items-center gap-8 p-6">
          <div className="flex flex-col items-center gap-7 w-full">
            <div className="flex flex-col items-center gap-6 w-full">
              <h3 className="text-center [font-family:'Manrope',Helvetica] font-semibold text-white text-base tracking-[0] leading-[normal]">
                Tell us what you need and we&apos;ll match you to the perfect
                solution for your company
              </h3>
            </div>

            <div className="flex flex-col items-center gap-6 p-2.5 w-full">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-4 w-full"
                >
                  <img
                    className="w-10 h-10 object-cover"
                    alt={feature.title}
                    src={feature.icon}
                  />

                  <div className="flex flex-col items-center gap-2 w-full">
                    <h4 className="text-center [font-family:'Manrope',Helvetica] font-semibold text-white text-[13px] tracking-[0] leading-[normal]">
                      {feature.title}
                    </h4>

                    <p className="text-center [font-family:'Manrope',Helvetica] font-medium text-[#d6d6d6] text-[11px] tracking-[0] leading-[normal]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-start gap-2 px-6 py-4 w-full bg-[#ececf00d] rounded-xl shadow-[1px_2px_2px_#0000000d]">
              <h4 className="[font-family:'Manrope',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[25px]">
                What you&apos;ll get:
              </h4>

              <div className="flex flex-col items-start gap-2 w-full">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2.5">
                    <CheckIcon className="w-4 h-4 text-white" />
                    <span className="[font-family:'Manrope',Helvetica] font-medium text-white text-[11px] tracking-[0] leading-[18px]">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Button className="h-12 w-full items-center justify-center gap-[110px] px-8 py-0 rounded-[56px] border-none backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] bg-[linear-gradient(90deg,rgba(229,156,255,0.36)_0%,rgba(186,156,255,0.36)_50%,rgba(156,178,255,0.36)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[56px] before:[background:linear-gradient(142deg,rgba(75,95,162,1)_29%,rgba(16,16,16,0)_74%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative h-auto">
            <div className="flex items-center justify-center gap-1">
              <span className="bg-[linear-gradient(90deg,rgba(229,156,255,1)_0%,rgba(186,156,255,1)_50%,rgba(156,178,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Manrope',Helvetica] font-semibold text-transparent text-base tracking-[-0.16px] leading-5 whitespace-nowrap">
                Get started
              </span>

              <ZapIcon className="w-5 h-5 text-white" />
            </div>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};
