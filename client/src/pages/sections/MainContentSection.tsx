import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const cardData = [
  {
    content: "See how you can make the right choice.",
    hasStatistic: false,
  },
  {
    statistic: "90%+",
    statisticColor: "text-[#1dffbf]",
    statisticText: " believe tech boosts productivity.",
    content: "Tips to find the vendors you need.",
    hasStatistic: true,
  },
  {
    statistic: "33%",
    statisticColor: "text-[#fd9ff7]",
    statisticText: " face issues training new users.",
    content: "You Don't Have To.",
    hasStatistic: true,
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-14 relative">
      <header className="relative flex items-center justify-center w-[290px] mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#eaeaea] text-[32px] text-center tracking-[-0.32px] leading-[normal]">
        Objective insights to drive
        <br />
        business impact with software
      </header>

      <div className="inline-flex flex-col items-start justify-center gap-4 relative flex-[0_0_auto]">
        {cardData.map((card, index) => (
          <Card
            key={index}
            className="flex flex-col w-[312px] items-start gap-2.5 p-7 relative flex-[0_0_auto] bg-[#ffffff05] rounded-[20px] border-[none] backdrop-blur-[32.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(32.5px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[20px] before:[background:linear-gradient(142deg,rgba(64,64,64,1)_15%,rgba(16,16,16,0)_63%,rgba(64,64,64,0.25)_98%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
          >
            <CardContent className="flex flex-col items-start justify-center gap-6 relative self-stretch w-full flex-[0_0_auto] p-0">
              {card.hasStatistic && (
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-transparent text-2xl leading-[normal]">
                  <span
                    className={`font-extrabold ${card.statisticColor} tracking-[-0.06px]`}
                  >
                    {card.statistic}
                  </span>
                  <span className="text-white tracking-[-0.06px]">
                    {card.statisticText}
                  </span>
                </div>
              )}

              <div
                className={`relative ${card.hasStatistic ? "flex items-center justify-center w-fit" : "flex items-center justify-center w-fit mr-[-16.00px]"} [font-family:'Manrope',Helvetica] font-normal text-[#efedfdb2] text-[15px] tracking-[0] leading-[22.5px] whitespace-nowrap`}
              >
                {card.content}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
