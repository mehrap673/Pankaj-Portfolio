import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const GallerySection = (): JSX.Element => {
  const featureCards = [
    {
      icon: "/figmaAssets/gradient-glass--17--1.png",
      iconWidth: "w-[89px]",
      iconHeight: "h-[92px]",
      title: "Save money",
      description:
        "We've done the hard work! Shortlist, compare and connect with partners that are ready to deliver exactly what you need.",
    },
    {
      icon: "/figmaAssets/gradient-glass--20--1.png",
      iconWidth: "w-[86.64px]",
      iconHeight: "h-[92.48px]",
      title: "Save money",
      description:
        "Find cost-effective software solutions that match your scope and budget, including high-quality global options you may not have considered.",
    },
    {
      icon: "/figmaAssets/gradient-glass--18--1.png",
      iconWidth: "w-[92.67px]",
      iconHeight: "h-[92.48px]",
      title: "Save effort",
      description:
        "We've done the hard work! Shortlist, compare and connect with partners that are ready to deliver exactly what you need.",
    },
  ];

  return (
    <section className="w-full flex flex-col gap-14">
      <header className="flex justify-center">
        <div className="w-[346px] flex flex-col items-center gap-7">
          <h2 className="flex items-center justify-center h-11 w-[249px] [font-family:'Manrope',Helvetica] font-semibold text-[#eaeaea] text-[32px] text-center tracking-[-0.32px] leading-[normal]">
            A better way to...
          </h2>

          <p className="flex items-center justify-center h-[54px] w-[342px] [font-family:'Manrope',Helvetica] font-medium text-[#ffffffb2] text-[13px] text-center tracking-[0] leading-[normal]">
            Discover how GlobalITMarket gives you the tools to make informed
            software decisions with or without technical knowledge
          </p>
        </div>
      </header>

      <div className="flex flex-col items-center gap-6">
        {featureCards.map((card, index) => (
          <Card
            key={index}
            className="w-full max-w-[342px] rounded-[30px] border-[none] bg-[linear-gradient(41deg,rgba(16,16,16,1)_14%,rgba(22,21,21,0.29)_58%,rgba(156,178,255,0.19)_84%)] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[30px] before:[background:linear-gradient(142deg,rgba(64,64,64,1)_15%,rgba(16,16,16,0)_63%,rgba(64,64,64,0.25)_98%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative"
          >
            <CardContent className="flex items-center gap-2.5 p-8">
              <div className="flex flex-col items-start gap-4 flex-1">
                <img
                  className={`relative ${card.iconWidth} ${card.iconHeight} object-cover`}
                  alt="Gradient glass"
                  src={card.icon}
                />

                <h3 className="flex items-center justify-center self-stretch [font-family:'Manrope',Helvetica] font-semibold text-white text-2xl tracking-[-0.24px] leading-[64px]">
                  {card.title}
                </h3>

                <p className="self-stretch [font-family:'Manrope',Helvetica] font-normal text-[#efedfdb2] text-base tracking-[0] leading-6">
                  {card.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
